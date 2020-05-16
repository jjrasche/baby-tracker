import { DataSet } from "./data-set";

export type StyleMethod = (d1: DataSet, d2?: DataSet, allD1?: DataSet[], allD2?: DataSet[]) => string;

  // assume a sorted DataSet Array
export const getChildColor: StyleMethod = (d1: DataSet): string => {
  const color = d1.child === "Charlie" ? "red" : "blue";
  return `color: ${color}`;
};
export const getOpacity: StyleMethod = (d1: DataSet, d2: DataSet, d1All: DataSet[]): string => {
  const firstDate = d1All.first().time;
  const lastDate = d1All.last().time;
  const dateRange = firstDate.daysBetween(lastDate);
  return "fill-opacity: " + (firstDate.daysBetween(d1.time) / dateRange).toString();
};
