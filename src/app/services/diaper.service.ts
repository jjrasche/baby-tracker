import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { map, filter } from "rxjs/operators";
import { SleepEntry, SleepType, nightTimeStart, nightTimeEnd } from "@models/sleep";
import { napsPerDayColumns } from "../column-configs";
import { EntryService } from "./entry.service";
import { Entry, Child } from "@models/entry";
import { countAggregateFunction, sumPropertyAggregateFunction, SortDirection } from "../extensions/array.extensions";
import { DiaperEntry, DiaperType } from "@models/diaper";
import { SumByDate } from "@models/sum-by-date";
import { SumCounByChildDate } from "@models/sum-count-by-child-date";

@Injectable({providedIn: "root"})
export class DiaperService {

  constructor(private entryService: EntryService) {}

  get all(): BehaviorSubject<DiaperEntry[]> {
    return this.entryService.entries.pipe(
      filter(d => d.length > 0),
      map((entries: Entry[]) => {
        return entries
          // tslint:disable-next-line:triple-equals
          .filter(e => e.activity == "Diaper")
          .map(entry => new DiaperEntry(entry));
      })
    ) as BehaviorSubject<DiaperEntry[]>;
  }

  get poo(): Observable<DiaperEntry[]> {
    return this.all.pipe(
        map(e => {
            const ret = e.filter(d => d.pooSize != null)
              .sortByProperty("startTime", SortDirection.Ascending);
            return ret;
        })
    );
  }

  get pee(): Observable<DiaperEntry[]> {
    return this.all.pipe(
      map(e => {
          const ret = e.filter(d => d.peeSize != null)
            .sortByProperty("startTime", SortDirection.Ascending);
          return ret;
      })
    );
  }

  getDiaperAmountByChildByDate = (diaperType: DiaperType, child: Child): Observable<SumCounByChildDate[]> => {
      return this.all.pipe(
        map(diaperEntries => {
          if (diaperType === "poo") {
            return diaperEntries.filter(de => de.pooSize != null && de.childName === child)
              .selectGroupByAndAggregate(["entryDate", "childName"], [sumPropertyAggregateFunction("pooSize"), countAggregateFunction]);
          }
          return diaperEntries.filter(de => de.peeSize != null && de.childName === child)
          .selectGroupByAndAggregate(["entryDate", "childName"], [sumPropertyAggregateFunction("peeSize"), countAggregateFunction]);
        })
      );
  }
}
