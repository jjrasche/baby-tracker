import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry } from "@models/sleep";
import { napsPerDayColumns } from "../column-configs";
import { EntryService } from "./entry.service";
import { Entry } from "@models/entry";

@Injectable({providedIn: "root"})
export class NapService {

  constructor(private entryService: EntryService) {}

  get naps(): Observable<SleepEntry[]> {
    return this.entryService.sleep.pipe(map(e => e.filter(s => s.sleepType === "nap")));
  }

  napEntriesByDate(date: Date): BehaviorSubject<SleepEntry[]> {
    return this.entryService.sleep.pipe(
      map((sleepEntries: SleepEntry[]) => sleepEntries.filter(s => s.sleepType === "nap" && s.entryDate.sameDate(date)))
    ) as BehaviorSubject<SleepEntry[]>;
  }

  getNapsPerDay = (): Observable<any[]> => this.naps.pipe(map(naps => naps.selectGroupByAndCount(["entryDate"])));
  getNapsPerDayByChild = (): Observable<any[]> =>
    this.naps.pipe(map(naps => naps.selectGroupByAndCount(["entryDate", "childName"])))

  getnumNapsPerDayChartData = (): Observable<google.visualization.ChartSpecs> =>
    this.getNapsPerDay().pipe(map((napData: any[]) =>
      this.entryService.createColumnChartData(napsPerDayColumns, napData.map(nd => [nd.entryDate, nd.count]))))

  numNapsPerDayByChildChartData(childName: string): Observable<google.visualization.ChartSpecs> {
    return this.getNapsPerDay().pipe(
      map((napData: any[]) =>
        this.entryService.createColumnChartData(napsPerDayColumns,
          napData.filter(n => n.childName === childName).map(nd => [nd.entryDate, nd.count]))
    ));
  }

  numNapsPerDayByMonthChartData(monthDate: Date): BehaviorSubject<google.visualization.ChartSpecs> {
    return this.getNapsPerDay().pipe(
      map((napData: any[]) => {
        return this.entryService.createColumnChartData(napsPerDayColumns,
          napData.filter(n => n.entryDate.sameMonth(monthDate)).map(nd => [nd.entryDate, nd.count]));
      }
    )) as BehaviorSubject<google.visualization.ChartSpecs>;
  }
}
