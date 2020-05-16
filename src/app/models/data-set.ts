import { Child } from "./entry";

export class DataSet {

  constructor(
    public time: Date,
    public child: Child,
    public data: any
  ) {}

  match(prospect: DataSet): boolean {
    return this.child === prospect.child &&
      this.time.sameDate(prospect.time);
  }
}
