import { Entry } from "@models/entry";

export const Minutes = 60;
export const fullCycle = 42;

export class Sleep extends Entry {
  type: "nap" | "sleep";
  fullCycle: boolean;
  nightTimeStart = (): number => 18 * Minutes;
  nightTimeEnd = (): number => 6 * Minutes;

  constructor(entry: Entry) {
    super(entry);
    const eventMinutes = this.startTime.getMinutes();
    this.type = this.nightTimeStart() > eventMinutes || this.nightTimeEnd() < eventMinutes ? "sleep" : "nap";
    this.fullCycle = this.duration > fullCycle ? true : false;
  }
}
