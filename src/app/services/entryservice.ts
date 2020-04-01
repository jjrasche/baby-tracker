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

  get numNapsPerDayChartData(): Observable<any> {
    return this.numNapsPerDay.pipe(
      map((napData: NapGraphData[]) => {
        const daysData = napData.map(nd => nd.day);
        const numNapsData = napData.map(nd => nd.num);
        return {
          chartType: "ColumnChart",
          dataTable: [["", ...napData.map(nd => nd.day)],
                      ["", ...napData.map(nd => nd.num)]],
          options: {title: "Countries"},
          containerId: "vis_div"
        };
      })
    );
  }
}
