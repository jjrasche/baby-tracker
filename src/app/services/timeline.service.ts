import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry } from "@models/sleep";
import { napsPerDayColumns, activityTimeline } from "../column-configs";
import { EntryService } from "./entry.service";
import { Entry } from "@models/entry";

@Injectable({providedIn: "root"})
export class TimelineService {

  constructor(private entryService: EntryService) {}

  get entriesByDay(): BehaviorSubject<{[num: number]: Entry[]}> {
    return this.entryService.entries.pipe(map(naps => naps.selectGroupByAndCount(["entryDate"]))).toBehaviorSubject();
  }

  getTimelineByChildChartData(childName: string): BehaviorSubject<google.visualization.ChartSpecs> {
    return this.entriesByDay.pipe(
      map((groupedDayEntries: {[num: number]: Entry[]}) => {
        const chartData = [];
        Object.keys(groupedDayEntries).forEach((epoch: string) => {
          const entries = groupedDayEntries[parseInt(epoch, 10)];
          entries
            .filter(entry => entry.childName === childName)
            .forEach(entry => {
              chartData.push([
                entry.entryDate,
                entry.activity,
                entry.startTime,
                entry.endTime
              ]);
            });
        });
        return this.entryService.creteTimelineChartData(activityTimeline, chartData);
    })).toBehaviorSubject();
  }


}
