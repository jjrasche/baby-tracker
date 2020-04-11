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


  testChart(): BehaviorSubject<any> { // Observable<google.visualization.ChartSpecs> {
    return new BehaviorSubject({
      chartType: "Timeline",
      // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
      dataTable: [
        [{ type: "string", id: "Room" },
        { type: "string", id: "Name" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" }],
        [ "Magnolia Room", "Beginning JavaScript",       new Date(0, 0, 0, 12, 0, 0),  new Date(0, 0, 0, 13, 30, 0) ],
        [ "Magnolia Room", "Intermediate JavaScript",    new Date(0, 0, 0, 14, 0, 0),  new Date(0, 0, 0, 15, 30, 0) ],
        [ "Magnolia Room", "Advanced JavaScript",        new Date(0, 0, 0, 16, 0, 0),  new Date(0, 0, 0, 17, 30, 0) ],
        [ "Willow Room",   "Beginning Google Charts",    new Date(0, 0, 0, 12, 30, 0), new Date(0, 0, 0, 14, 0, 0) ],
        [ "Willow Room",   "Intermediate Google Charts", new Date(0, 0, 0, 14, 30, 0), new Date(0, 0, 0, 16, 0, 0) ],
        [ "Willow Room",   "Advanced Google Charts",     new Date(0, 0, 0, 16, 30, 0), new Date(0, 0, 0, 18, 0, 0) ]
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

  public creteTimelineChartData(
    columns: any, // google.visualization.GroupKeyOptions[],
    data: any[][],
    title: string = "timeline"): any { // google.visualization.ChartSpecs {
      return {
        chartType: "Timeline",
        // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
        dataTable: [columns, ...data],
        options: {title},
      };
  }
}
