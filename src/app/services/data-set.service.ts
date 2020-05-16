import { Injectable } from "@angular/core";
import { Child } from "@models/entry";
import { NapService } from "./nap.service";
import { BehaviorSubject, Observable, of, combineLatest } from "rxjs";
import { DataSet } from "@models/data-set";
import { SleepEntry, nightTimeEnd, nightTimeStart } from "@models/sleep";
import { map, filter } from "rxjs/operators";
import { StyleMethod } from "@models/styel-method";
import { ToolTipMethod, defaultToolTipMethod } from "@models/tool-tip-method";

@Injectable({providedIn: "root"})
export class DataSetService {

  constructor(
    private napService: NapService,
  ) {}


string;
  sortDataSet(a: DataSet, b: DataSet): number {
    if (a.child > b.child) {
      return 1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  }

  // TODO: should make this a combinelatest
  mergeDataSets(d1: BehaviorSubject<DataSet[]>, d2: BehaviorSubject<DataSet[]>,
                styleSetters: StyleMethod[] = null, toolTipMethod: ToolTipMethod = null): BehaviorSubject<any[][]> {
    return combineLatest([d1, d2]).pipe(
      filter(data => data[0] != null && data[1] != null),
      map((data) => {
        const ret: any[][] = [];
        const data1 = data[0];
        const data2 = data[1];
        // match each unique child, time combo into a 2 x n array
        data1.forEach((datumn1: DataSet) => {
          const matchingDatumn2 = data2.find(datumn2 => datumn2.match(datumn1));
          if (matchingDatumn2) {
            const arr = [datumn1.data, matchingDatumn2.data];
            if (styleSetters) {
              arr.push(styleSetters.map(setter => setter(datumn1, matchingDatumn2, data1)).join("; "));
            }
            if (toolTipMethod) {
              arr.push(defaultToolTipMethod(datumn1, matchingDatumn2));
            }
            ret.push(arr);
          }
        });
        return ret;
      }
    )).toBehaviorSubject();
  }

  morningWakeUptime(): BehaviorSubject <DataSet[]> {
    return this.napService.sleep.pipe(
      map((sleepData: SleepEntry[]) => {
        const arr: DataSet[] = [];
        const childSleepDataByDate = sleepData.groupByProperties(["entryDate", "childName"]);
        Object.keys(childSleepDataByDate).forEach(groupKey => {
          const child = groupKey.split("-").last();
          const sleeps = childSleepDataByDate[groupKey];
          const lastSleepOfNight = sleeps.filter(sleep => sleep.minutes < nightTimeEnd()).sort().last();
          if (lastSleepOfNight) {
            arr.push(new DataSet(
              lastSleepOfNight.endDate.dateOnly(),
              child as Child,
              lastSleepOfNight.endTime.getTimeOfDayObject()
            ));
          }
        });
        return arr.sort(this.sortDataSet);
      }
    )).toBehaviorSubject();
  }

  bedTimeStart(lookForPreviousDaysSleepStart: boolean = false): BehaviorSubject <DataSet[]> {
    return this.napService.sleep.pipe(
      map((sleepData: SleepEntry[]) => {
        const childSleepDataByDate = sleepData.groupByProperties(["entryDate", "childName"]);
        const arr: DataSet[] = [];
        Object.keys(childSleepDataByDate).forEach(groupKey => {
          const child = groupKey.split("-").last();
          const sleeps = childSleepDataByDate[groupKey];
          const firstSleepOfNight = sleeps.filter(sleep => sleep.minutes > nightTimeStart()).sort().first();
          if (firstSleepOfNight) {
            arr.push(new DataSet(
              lookForPreviousDaysSleepStart ? firstSleepOfNight.entryDate : firstSleepOfNight.entryDate.addDays(1),
              child as Child,
              firstSleepOfNight.startTime.getTimeOfDayObject()
            ));
          }
        });
        return arr.sort(this.sortDataSet);
      }
    )).toBehaviorSubject();
  }
}
