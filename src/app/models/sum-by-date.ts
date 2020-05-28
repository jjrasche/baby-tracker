import { Child } from "./entry";

export interface SumByDate {
  sum: number;
  entryDate: Date;
  child?: Child;
}
