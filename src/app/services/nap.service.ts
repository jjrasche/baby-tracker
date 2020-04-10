import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry } from "@models/sleep";
import { napsPerDayColumns } from "../column-configs";
import { EntryService } from "./entry.service";
import { NapGraphData } from "@models/nap-graph-data";
import { Entry } from "@models/entry";

@Injectable({providedIn: "root"})
export class NapService {

  constructor(private entryService: EntryService) {}

  napEntriesByDate(date: Date): BehaviorSubject<SleepEntry[]> {
    return this.entryService.sleep.pipe(
      map((sleepEntries: SleepEntry[]) => sleepEntries.filter(s => s.sleepType === "nap" && s.entryDate.sameDate(date)))
    ) as BehaviorSubject<SleepEntry[]>;
  }

  get numNapsPerDay(): Observable<NapGraphData[]> {
    return this.entryService.sleep.pipe(
      map((sleepEntries: SleepEntry[]) => {
        const groupMap = sleepEntries
          .filter(e => e.sleepType === "nap")
          .groupBy(e => `${e.entryDate.toString()}-${e.childName}`);
        const napsPerDay = Object.keys(groupMap)
          .map(key => groupMap[key])
          .map((napsForDay: SleepEntry[]) => {
            return {
              day: napsForDay[0].entryDate,
              child: napsForDay[0].childName,
              num: napsForDay.length
            } as NapGraphData;
          });
        return napsPerDay;
      })
    );
  }

  get numNapsPerDayChartData(): Observable<google.visualization.ChartSpecs> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) => this.entryService.createColumnChartData(napsPerDayColumns, napData.map(nd => [nd.day, nd.num]))
    ));
  }

  numNapsPerDayByChildChartData(childName: string): Observable<google.visualization.ChartSpecs> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) =>
        this.entryService.createColumnChartData(napsPerDayColumns, napData.filter(n => n.child === childName).map(nd => [nd.day, nd.num]))
    ));
  }

  numNapsPerDayByMonthChartData(monthDate: Date): BehaviorSubject<google.visualization.ChartSpecs> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) => {
        return this.entryService.createColumnChartData(napsPerDayColumns,
          napData.filter(n => n.day.sameMonth(monthDate)).map(nd => [nd.day, nd.num]));
      }
    )) as BehaviorSubject<google.visualization.ChartSpecs>;
  }
}
