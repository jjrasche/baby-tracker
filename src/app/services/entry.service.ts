import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry } from "@models/sleep";
import { Entry } from "@models/entry";
import { napsPerDayColumns } from "../column-configs";

@Injectable({providedIn: "root"})
export class EntryService {
  entries: BehaviorSubject<Entry[]>;

  constructor() {
    this.entries = new BehaviorSubject<Entry[]>([]);
  }

  addEntries(events: Entry[]) {
    this.entries.next(events.unique());
    // this.entries.next(events);
  }

  // selectors
  get sleep(): BehaviorSubject<SleepEntry[]> {
    return this.entries.pipe(
      map((entries: Entry[]) => {
        return entries
          // tslint:disable-next-line:triple-equals
          .filter(e => e.activity == "Sleep")
          .map(entry => new SleepEntry(entry));
      })
    ) as BehaviorSubject<SleepEntry[]>;
  }


  testChart(): Observable<any> { // Observable<google.visualization.ChartSpecs> {
    return of({
      chartType: "ColumnChart",
      // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
      dataTable: [
        [{label: "Country", type: "string"},
          {label: "Population", type: "number"},
          {label: "Area", type: "number"}],
        ["CN", 1324, 9640821 / 1000],
        ["IN", 1133, 3287263 / 1000],
        ["US", 304, 9629091 / 1000],
        ["ID", 232, 1904569 / 1000],
        ["BR", 187, 8514877 / 1000]
      ]
    });
  }


  public createColumnChartData(
    columns: any, // google.visualization.GroupKeyOptions[],
    data: any[][],
    title: string = "column chart"): any { // google.visualization.ChartSpecs {
      return {
        chartType: "ColumnChart",
        // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
        dataTable: [columns, ...data],
        options: {title},
      };
  }
}
