import { Child } from "./entry";

export class Datumn {

  constructor(
    public time: Date,
    public child: Child,
    public data: any
  ) {}

  match(prospect: Datumn): boolean {
    return this.child === prospect.child &&
      this.time.sameDate(prospect.time);
  }
}
