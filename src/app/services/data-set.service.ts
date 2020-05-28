import { Injectable } from "@angular/core";
import { Child, Entry } from "@models/entry";
import { NapService } from "./nap.service";
import { BehaviorSubject, Observable, of, combineLatest } from "rxjs";
import { Datumn } from "@models/datumn";
import { SleepEntry, nightTimeEnd, nightTimeStart } from "@models/sleep";
import { map, filter } from "rxjs/operators";
import { StyleMethod } from "@models/styel-method";
import { ToolTipMethod, defaultToolTipMethod } from "@models/tool-tip-method";
import { ChartColumn, dataType } from "@models/chart-column";
import { DiaperService } from "./diaper.service";
import { DiaperEntry, DiaperType } from "@models/diaper";
import { SumByDate } from "@models/sum-by-date";
import { SumCounByChildDate } from "@models/sum-count-by-child-date";

@Injectable({providedIn: "root"})
export class DataSetService {

  constructor(
    private napService: NapService,
    private diaperService: DiaperService
  ) {}


string;
  sortDataSet(a: Datumn, b: Datumn): number {
    if (a.child > b.child) {
      return 1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  }

  mergeDataSets(data1: Datumn[], data2: Datumn[], styleSetters: StyleMethod[] = null, toolTipMethod: ToolTipMethod = null): any[][] {
    const ret: any[][] = [];
    // match each unique child, time combo into a 2 x n array
    data1.forEach((datumn1: Datumn) => {
      const matchingDatumn2 = data2.find(datumn2 => datumn2.match(datumn1));
      if (matchingDatumn2) {
        const arr = [datumn1.data, matchingDatumn2.data];
        if (styleSetters) {
          arr.push(styleSetters.map(setter => setter(datumn1, matchingDatumn2, data1)).join("; "));
        }
        if (toolTipMethod) {
          arr.push(toolTipMethod(datumn1, matchingDatumn2));
        }
        ret.push(arr);
      }
    });
    return ret;
  }

  morningWakeUptime(child?: Child): BehaviorSubject<ChartColumn> {
    return this.napService.sleep.pipe(
      map((sleepData: SleepEntry[]) => {
        const arr: Datumn[] = [];
        const childSleepDataByDate = sleepData
          .filter(d => !!child ? d.childName === child : true)
          .groupByProperties(["endDate", "childName"]);
        Object.keys(childSleepDataByDate).forEach(groupKey => {
          const childName = groupKey.split("-").last();
          const sleeps = childSleepDataByDate[groupKey];
          const lastSleepOfNight = sleeps.filter(sleep => sleep.endTime.minutesSinceStartOfDay() < nightTimeEnd()).sort().last();
          if (lastSleepOfNight) {
            arr.push(new Datumn(
              lastSleepOfNight.endDate,
              childName as Child,
              lastSleepOfNight.endTime.getTimeOfDayObject()
            ));
          } else {
            console.log(groupKey);
          }
        });
        return {
          title: "Morning WakeUp",
          dataType: "timeofday" as dataType,
          data: arr.sort(this.sortDataSet)
        };
      }
    )).toBehaviorSubject();
  }

  bedTimeStart(lookForPreviousDaysSleepStart: boolean = false, child?: Child): BehaviorSubject<ChartColumn> {
    return this.napService.sleep.pipe(
      map((sleepData: SleepEntry[]) => {
        const childSleepDataByDate = sleepData
          .filter(d => !!child ? d.childName === child : true)
          .groupByProperties(["startDate", "childName"]);
        const arr: Datumn[] = [];
        Object.keys(childSleepDataByDate).forEach(groupKey => {
          const childName = groupKey.split("-").last();
          const sleeps = childSleepDataByDate[groupKey];
          const firstSleepOfNight = sleeps.filter(sleep => sleep.startTime.minutesSinceStartOfDay() > nightTimeStart()).sort().first();
          if (firstSleepOfNight) {
            arr.push(new Datumn(
              lookForPreviousDaysSleepStart ? firstSleepOfNight.entryDate : firstSleepOfNight.entryDate.addDays(1),
              childName as Child,
              firstSleepOfNight.startTime.getTimeOfDayObject()
            ));
          }
        });
        return {
          title: "Start Night Sleep",
          dataType: "timeofday" as dataType,
          data: arr.sort(this.sortDataSet)
        };
      }
    )).toBehaviorSubject();
  }

  urineAmount(child?: Child): BehaviorSubject<ChartColumn> {
    return this.diaperService.getDiaperAmountByChildByDate("pee", child).pipe(
      map((aggData: SumCounByChildDate[]) => {
        const data = aggData.map(ad => new Datumn(ad.entryDate, ad.childName, ad.sum));
        return {
          title: "Urine Daily Amount",
          dataType: "number" as dataType,
          data
        };
      }
    )).toBehaviorSubject();
  }

  pooAmount(child?: Child): BehaviorSubject<ChartColumn> {
    return this.diaperService.getDiaperAmountByChildByDate("poo", child).pipe(
      map((aggData: SumCounByChildDate[]) => {
        const data = aggData.map(ad => new Datumn(ad.entryDate, ad.childName, ad.sum));
        return {
          title: "Poo Daily Amount",
          dataType: "number" as dataType,
          data
        };
      }
    )).toBehaviorSubject();
  }

}
