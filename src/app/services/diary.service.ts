import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { EntryService } from "./entry.service";
import { Entry } from "@models/entry";

@Injectable({providedIn: "root"})
export class DiaryService {

  constructor(private entryService: EntryService) {}

  get all(): BehaviorSubject<Entry[]> {
    return this.entryService.entries.pipe(
      map((entries: Entry[]) => entries.filter(e => e.activity == "Diary"))
    ) as BehaviorSubject<Entry[]>;
  }

  get allText(): Observable<string[]> {
    return this.all.pipe(
      map(diaryEntries => {
        const ret = diaryEntries.map(d => `${d.text} ${d.notes}`);
        return ret;
      })
    );
  }
}
