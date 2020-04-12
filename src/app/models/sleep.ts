import { Entry } from "@models/entry";

export const MinutesInHour = 60;
export const fullCycle = 42;
export type SleepType = "nap" | "sleep";

export class SleepEntry extends Entry {
  sleepType: SleepType;
  fullCycle: boolean;
  get nightTimeStart(): number { return 18 * MinutesInHour; }
  get nightTimeEnd(): number { return 6 * MinutesInHour; }

  constructor(entry: Entry) {
    super(entry);
    this.sleepType = (this.nightTimeStart < this.minutes || this.minutes < this.nightTimeEnd) ? "sleep" : "nap";
    this.fullCycle = this.duration > fullCycle ? true : false;
  }
}
