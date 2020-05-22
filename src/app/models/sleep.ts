import { Entry } from "@models/entry";

export const MinutesInHour = 60;
export const fullCycle = 42;
export type SleepType = "nap" | "sleep";
export const nightTimeStart = (): number => 18 * MinutesInHour;
export const nightTimeEnd = (): number => 7 * MinutesInHour;

export class SleepEntry extends Entry {
  sleepType: SleepType;
  fullCycle: boolean;

  constructor(entry: Entry) {
    super(entry);
    this.sleepType = (nightTimeStart() < this.minutes || this.minutes < nightTimeEnd()) ? "sleep" : "nap";
    this.fullCycle = this.duration > fullCycle ? true : false;
  }
}
