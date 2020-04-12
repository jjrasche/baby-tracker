import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry, SleepType } from "@models/sleep";
import { napsPerDayColumns } from "../column-configs";
import { EntryService } from "./entry.service";
import { Entry, Child } from "@models/entry";
import { countAggregateFunction, sumPropertyAggregateFunction } from "../extensions/array.extensions";

export interface SumByDate {
  sum: number;
  entryDate: Date;
}

@Injectable({providedIn: "root"})
export class NapService {

  constructor(private entryService: EntryService) {}

  get sleep(): BehaviorSubject<SleepEntry[]> {
    return this.entryService.entries.pipe(
      map((entries: Entry[]) => {
        return entries
          // tslint:disable-next-line:triple-equals
          .filter(e => e.activity == "Sleep")
          .map(entry => new SleepEntry(entry));
      })
    ) as BehaviorSubject<SleepEntry[]>;
  }

  get naps(): Observable<SleepEntry[]> {
    return this.sleep.pipe(map(e => e.filter(s => s.sleepType === "nap")));
  }

  napEntriesByDate(date: Date): BehaviorSubject<SleepEntry[]> {
    return this.sleep.pipe(
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

  getSleepEventsByChildByDate = (sleepType: SleepType, child: Child): Observable<SumByDate[]> => this.sleep.pipe(
    map(sleepEntries => {
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

  napTimeByChildChartData(childName: Child): BehaviorSubject<google.visualization.ChartSpecs> {
    return combineLatest(
      this.getSleepEventsByChildByDate("sleep", childName),
      this.getSleepEventsByChildByDate("nap", childName)).pipe(
      // map((data) => {
      map((data: [SumByDate[], SumByDate[]]) => {
        const sleepSums = data[0];
        const napSums = data[1];
        if (sleepSums.length === 0 || napSums.length === 0 ) {
          return null;
        }
        const chartData = napSums.map(nap => {
          const matchingSleepSum = sleepSums.find(ss => ss.entryDate.sameDate(nap.entryDate));
          return [nap.entryDate, nap.sum, matchingSleepSum ? matchingSleepSum.sum : 0];
        });
        const ret = this.entryService.createColumnChartData(["date", "naps", "sleep"], chartData);
        return ret;
      }
    )).toBehaviorSubject();
  }
}
