import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Sleep } from "@models/sleep";
import { Entry } from "@models/entry";

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
  get sleep(): Observable<Sleep[]> {
    return this.entries.pipe(
      map((entries: Entry[]) => {
        return entries.map(entry => {
          return new Sleep(entry);
        }
        );
      })
    );
  }
}
