import { SleepEntry } from "./sleep";

export type Child = "Charlie" | "Theodore";

export class Entry {
  startTime: Date;
  endTime: Date;
  activity: string;
  duration: number;
  quantity: number;
  extraData: string;
  text: string;
  notes: string;
  caregiver: string;
  childName: Child;

  constructor(entry: Entry) {
    this.startTime = entry.startTime;
    this.endTime = entry.endTime;
    this.activity = entry.activity;
    this.duration = entry.duration;
    this.quantity = entry.quantity;
    this.extraData = entry.extraData;
    this.text = entry.text;
    this.notes = entry.notes;
    this.caregiver = entry.caregiver;
    this.childName = entry.childName;
  }

  get entryDate(): Date {
    return this.startTime.dateOnly();
  }

  get startDate(): Date {
    return this.startTime.dateOnly();
  }

  get endDate(): Date {
    return this.endTime.dateOnly();
  }

  getNormalizedStartEndTimes(focusDate: Date): Date[] {
    const focusDay = focusDate.getDate();
    const startDay = this.startTime.getDate();
    const endDay = this.endTime.getDate();

    let start: Date = this.startTime.time();
    let end: Date = this.endTime.time();

    if (focusDay === startDay && startDay !== endDay) {
      start = this.startTime.time();
      end = this.endTime.time().addDays(1);
    } else if (focusDay === endDay && startDay !== endDay) {    // starts in previous day
      start = this.startTime.time().addDays(-1);
      end = this.endTime.time();
    }
    return [start, end];
  }

  get minutes(): number {
    return (this.startTime.getHours() * 60) + this.startTime.getMinutes();
  }

  get spansMultipleDays(): number {
    return;
  }
}
