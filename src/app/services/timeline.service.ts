import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { SleepEntry } from "@models/sleep";
import { EntryService } from "./entry.service";
import { Entry } from "@models/entry";
import * as moment from "moment";

@Injectable({providedIn: "root"})
export class TimelineService {

  constructor(private entryService: EntryService) {}

  get entriesByDay(): BehaviorSubject<{[num: number]: Entry[]}> {
    return this.entryService.entries.pipe(map(naps => naps.groupByProperties(["entryDate"]))).toBehaviorSubject();
  }

  get entriesStartingOrEndingOnDate(): BehaviorSubject<{[num: number]: Entry[]}> {
    return this.entryService.entries.pipe(
      map(naps => {
        const startGroup = naps.groupByProperties(["startDate"]);
        const endGroup = naps.groupByProperties(["endDate"]);
        Object.keys(startGroup).forEach(startDate => {
          const entriesStartedInDate = startGroup[startDate];
          const entriesEndedInDate = endGroup[startDate];
          const entriesStartingAndEndingOnDate = [...entriesStartedInDate, ...entriesEndedInDate].unique();
          startGroup[startDate] = entriesStartingAndEndingOnDate;
        });
        return startGroup;
      })
    ).toBehaviorSubject();
  }

  getTimelineByChildChartData(childName: string): BehaviorSubject<any[][]> {
    return this.entriesStartingOrEndingOnDate.pipe(
      map((groupedDayEntries: {[num: number]: Entry[]}) => {
        const chartData = [];
        Object.keys(groupedDayEntries).forEach((dateString: string) => {
          const groupedData = groupedDayEntries[dateString];
          const date = new Date(dateString);
          groupedData
            .filter((entry: Entry) => entry.childName === childName)
            // .filter((entry: Entry) => entry.entryDate.sameDate(new Date("2020-01-01")))
            .forEach((entry: Entry, idx: number, arr: Entry[]) => {
              chartData.push([
                entry.entryDate.getChartDateTime(),
                this.timelineActivityLabel(entry),
                ...entry.getNormalizedStartEndTimes(date)
                // entry.startTime,
                // entry.endTime
              ]);
            });
        });
        return chartData;
    })).toBehaviorSubject();
  }

  private timelineActivityLabel(e: Entry): string {
    // tslint:disable-next-line:triple-equals
    if (e.activity == "Sleep") {
      return (new SleepEntry(e)).sleepType;
    }
    return e.activity;
  }


}
