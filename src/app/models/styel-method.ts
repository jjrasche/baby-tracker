import { Datumn } from "./datumn";

export type StyleMethod = (d1: Datumn, d2?: Datumn, allD1?: Datumn[], allD2?: Datumn[]) => string;

  // assume a sorted Datumn Array
export const getChildColor: StyleMethod = (d1: Datumn): string => {
  const color = d1.child === "Charlie" ? "red" : "blue";
  return `color: ${color}`;
};
export const getOpacity: StyleMethod = (d1: Datumn, d2: Datumn, d1All: Datumn[]): string => {
  const firstDate = d1All.first().time;
  const lastDate = d1All.last().time;
  const dateRange = firstDate.daysBetween(lastDate);
  return "fill-opacity: " + (firstDate.daysBetween(d1.time) / dateRange).toString();
};
