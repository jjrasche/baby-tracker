import { Entry } from "@models/entry";

enum DiaperSize {
  Small = 1,
  Medium = 3,
  Large = 5
}

export type DiaperType = "poo" | "pee";

export class DiaperEntry extends Entry {
  peeSize: DiaperSize;
  pooSize: DiaperSize;
  overallSize: DiaperSize;

  constructor(entry: Entry) {
    super(entry);
    const hasPoo = ["BM", "BM+Wet"].includes(entry.extraData);
    const hasPee = ["Wet", "BM+Wet"].includes(entry.extraData);
    this.overallSize =
      entry.text.includes("(large)") ? DiaperSize.Large :
      entry.text.includes("(medium)") ? DiaperSize.Medium :
      DiaperSize.Small;

    this.pooSize = hasPoo ? this.overallSize : null;
    this.peeSize = hasPee ? this.overallSize : null;
  }
}
