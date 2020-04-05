import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry } from "@models/sleep";
import { Entry } from "@models/entry";

class NapGraphData {
  day: Date;
  child: string;
  num: number;
}

@Injectable({providedIn: "root"})
export class EntryService {
  private subject: BehaviorSubject<Entry[]>;
  public entries: Observable<Entry[]>;

  constructor() {
    this.subject = new BehaviorSubject<Entry[]>([]);
    this.entries = this.subject.asObservable();
  }

  addEntries(events: Entry[]) {
    this.subject.next(events);
  }

  // selectors
  get sleep(): Observable<SleepEntry[]> {
    return this.entries.pipe(
      map((entries: Entry[]) => {
        return entries
          // tslint:disable-next-line:triple-equals
          .filter(e => e.activity == "Sleep")
          .map(entry => new SleepEntry(entry));
      })
    );
  }

  get numNapsPerDayChartData(): Observable<google.visualization.ChartSpecs> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) =>
        this.createColumnChartData(napData.map(nd => nd.day), napData.map(nd => nd.num)))
    );
  }

  numNapsPerDayByChildChartData(childName: string): Observable<google.visualization.ChartSpecs> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) => {
        const childData = napData.filter(n => n.child === childName);
        return this.createColumnChartData(childData.map(nd => nd.day), childData.map(nd => nd.num));
      })
    );
  }

  numNapsPerDayByMonthChartData(monthDate: Date): Observable<google.visualization.ChartSpecs> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) => {
        const childData = napData.filter(n => n.day.sameMonth(monthDate));
        const chartData = this.createColumnChartData(
            childData.map(nd => nd.day.convertToChartDateStringDay()),
            childData.map(nd => nd.num));
        return chartData;
      })
    );
  }

  get numNapsPerDay(): Observable<NapGraphData[]> {
    return this.sleep.pipe(
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

  private createColumnChartData(xaxis: any[], data: any[], title: string = "column chart"): google.visualization.ChartSpecs {
    return {
      chartType: "ColumnChart",
      dataTable: [["", ...xaxis],
                  ["", ...data]],
      options: {title},
    };
  }

  /**
   * DataTable: a 2d array,
   *  each column is adar
   */
  private createDataTable(): google.visualization.DataTable {
    return new google.visualization.DataTable({
      cols: [{id: "A", label: "NEW A", type: "string"},
             {id: "B", label: "B-label", type: "number"},
             {id: "C", label: "C-label", type: "date"}
      ],
      rows: [{c: [{v: "a"},
                 {v: 1.0, f: "One"},
                 {v: new Date(2008, 1, 28, 0, 31, 26), f: "2/28/08 12:31 AM"}
            ]},
             {c: [{v: "b"},
                 {v: 2.0, f: "Two"},
                 {v: new Date(2008, 2, 30, 0, 31, 26), f: "3/30/08 12:31 AM"}
            ]},
             {c: [{v: "c"},
                 {v: 3.0, f: "Three"},
                 {v: new Date(2008, 3, 30, 0, 31, 26), f: "4/30/08 12:31 AM"}
            ]}
      ],
      p: {foo: "hello", bar: "world!"}
    });
  }

  // private createColumnChartData(): google.visualization.ChartSpecs {
  //   return {
  //     chartType: "ColumnChart",
  //     dataTable: this.createDataTable()
  //   };
  // }
}
