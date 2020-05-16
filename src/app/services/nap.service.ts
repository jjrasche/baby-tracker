import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { map, filter } from "rxjs/operators";
import { SleepEntry, SleepType, nightTimeStart } from "@models/sleep";
import { napsPerDayColumns } from "../column-configs";
import { EntryService } from "./entry.service";
import { Entry, Child } from "@models/entry";
import { countAggregateFunction, sumPropertyAggregateFunction, SortDirection } from "../extensions/array.extensions";

export interface SumByDate {
  sum: number;
  entryDate: Date;
}

@Injectable({providedIn: "root"})
export class NapService {

  constructor(private entryService: EntryService) {}

  get all(): BehaviorSubject<SleepEntry[]> {
    return this.entryService.entries.pipe(
      map((entries: Entry[]) => {
        return entries
          // tslint:disable-next-line:triple-equals
          .filter(e => e.activity == "Sleep")
          .map(entry => new SleepEntry(entry));
      })
    ) as BehaviorSubject<SleepEntry[]>;
  }

  get sleep(): Observable<SleepEntry[]> {
    return this.all.pipe(
        map(e => {
            const ret = e.filter(s => s.sleepType === "sleep")
            .sortByProperty("startTime", SortDirection.Ascending);
            return ret;
        })
    );
  }

  get naps(): Observable<SleepEntry[]> {
    return this.all.pipe(map(e => e.filter(s => s.sleepType === "nap")));
  }

  napEntriesByDate(date: Date): BehaviorSubject<SleepEntry[]> {
    return this.all.pipe(
      map((sleepEntries: SleepEntry[]) => sleepEntries.filter(s => s.sleepType === "nap" && s.entryDate.sameDate(date)))
    ) as BehaviorSubject<SleepEntry[]>;
  }

  getNapsPerDay = (): Observable<any[]> => {
    return this.naps.pipe(map(naps => {
      const ret = naps.selectGroupByAndAggregate(["entryDate"], [countAggregateFunction]);
      return ret;
    }));
  }
  getNapsPerDayByChild = (): Observable<any[]> =>
    this.naps.pipe(map(naps => naps.selectGroupByAndAggregate(["entryDate", "childName"], [countAggregateFunction])))

  getSleepEventDurationByChildByDate = (sleepType: SleepType, child: Child): Observable<SumByDate[]> => this.all.pipe(
    map(sleepEntries => {
      console.log(`getSleepEventsByChildByDate ${sleepType}     ${child}`);
      // tslint:disable-next-line:triple-equals
      return sleepEntries.filter(se => se.sleepType == sleepType && se.childName == child)
      .selectGroupByAndAggregate(
        ["entryDate"],
        [sumPropertyAggregateFunction("duration"), countAggregateFunction]);
  }))

  getnumNapsPerDayChartData = (): Observable<google.visualization.ChartSpecs> =>
    this.getNapsPerDay().pipe(map((napData: any[]) =>
      this.entryService.createColumnChartData(napsPerDayColumns, napData.map(nd => [nd.entryDate, nd.count]))))

  numNapsPerDayByChildChartData(childName: string): BehaviorSubject<google.visualization.ChartSpecs> {
    return this.getNapsPerDayByChild().pipe(
      map((napData: any[]) => {
        const ret = this.entryService.createColumnChartData(napsPerDayColumns,
          napData.filter(n => n.childName === childName).map(nd => [nd.entryDate, nd.count]));
        return ret;
      }
    )).toBehaviorSubject();
  }

  numNapsPerDayByMonthChartData(monthDate: Date): BehaviorSubject<google.visualization.ChartSpecs> {
    return this.getNapsPerDay().pipe(
      map((napData: any[]) => {
        return this.entryService.createColumnChartData(napsPerDayColumns,
          napData.filter(n => n.entryDate.sameMonth(monthDate)).map(nd => [nd.entryDate, nd.count]));
      }
    )) as BehaviorSubject<google.visualization.ChartSpecs>;
  }

  napTimeByChildChartData(childName: Child): BehaviorSubject<any[][]> {
    return combineLatest([
      this.getSleepEventDurationByChildByDate("sleep", childName),
      this.getSleepEventDurationByChildByDate("nap", childName)]).pipe(
      filter((data: [SumByDate[], SumByDate[]]) => data[0].length !== 0 && data[1].length !== 0 ),
      map((data: [SumByDate[], SumByDate[]]) => {
        const sleepSums = data[0];
        const napSums = data[1];
        const chartData = napSums.map(nap => {
          const matchingSleepSum = sleepSums.find(ss => ss.entryDate.sameDate(nap.entryDate));
          return [nap.entryDate, matchingSleepSum ? matchingSleepSum.sum : 0, nap.sum];
        });
        console.log(`created chart data ${chartData.length}`);
        return chartData;
      }
    )).toBehaviorSubject();
  }

  // [<wake time>, <sleep time>]
  wokeUpVsBedTimeData(): BehaviorSubject<any[][]> {
    return this.sleep.pipe(
      map((sleepData: SleepEntry[]) => {
        const childSleepDataByDate = sleepData.groupByProperties(["entryDate", "childName"]);
        const arr = [];
        Object.keys(childSleepDataByDate).forEach(date => {
          const group = childSleepDataByDate[date].sortByProperty("startTime");
          const startSleep = group[0];
          const endSleep = group.last();
          const color = startSleep.childName === "Charlie" ? "pink" : "blue";
          arr.push([startSleep.startTime.getTimeOfDayObject(), endSleep.endTime.getTimeOfDayObject(), color]);
        });
        // const arr = sleepData.map(sd => [sd.startTime.getTimeOfDayObject(), sd.sleepType === "nap" ? 0 : 1]);
        return arr;
      }
    )).toBehaviorSubject();
  }

  // [<wake time>, <first nap next day>]
  wokeUpVsFirstNapStartData(): BehaviorSubject<any[][]> {
    return this.all.pipe(
      filter(d => d.length > 0),
      map((sleepData: SleepEntry[]) => {
        const dateRange = sleepData.map(sd => sd.startTime).getDateRange();
        const daysInDateRange = dateRange[0].daysBetween(dateRange[1]);
        const childSleepDataByDate = sleepData.groupByProperties(["entryDate", "childName"]);
        const arr = [];
        Object.keys(childSleepDataByDate).forEach(groupKey => {
          const groupChild = groupKey.split("-").last();
          const group = childSleepDataByDate[groupKey];
          const startSleep = this.getStartSleepEntry(group);
          if (startSleep == null) {
            return;
          }
          const nextGroupKey = `${startSleep.startTime.dateOnly().addDays(1).toString()}-${groupChild}`;
          let nextDaysGroup = childSleepDataByDate[nextGroupKey];
          if (nextDaysGroup == null) {
            return;
          }
          nextDaysGroup = nextDaysGroup.sortByProperty("startTime", SortDirection.Descending);
          const firstNap = this.getFirstNapEntry(nextDaysGroup);
          if (firstNap == null) {
            return;
          }
          const color = startSleep.childName === "Charlie" ? "pink" : "blue";
          const opacity = dateRange[0].daysBetween(startSleep.startTime) / daysInDateRange;
          arr.push([
            startSleep.startTime.getTimeOfDayObject(),
            firstNap.startTime.getTimeOfDayObject(),
            `color: ${startSleep.childName === "Charlie" ? "pink" : "blue"}; fill-opacity: ${opacity}`,  // style
            groupKey
          ]);
        });
        // const arr = sleepData.map(sd => [sd.startTime.getTimeOfDayObject(), sd.sleepType === "nap" ? 0 : 1]);
        return arr;
      }
    )).toBehaviorSubject();
  }

  private getStartSleepEntry(sleeps: SleepEntry[]): SleepEntry {
    const sleepsAfterNightStart = sleeps.filter(sleep => sleep.minutes > nightTimeStart());
    return sleepsAfterNightStart.sort()[0];
  }

  private getFirstNapEntry(events: SleepEntry[]): SleepEntry {
    const sleepsAfterNightStart = events.filter(event => event.sleepType === "nap");
    return sleepsAfterNightStart.sort().last();
  }
}
