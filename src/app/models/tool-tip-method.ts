import { Datumn } from "./datumn";
import { DatePipe } from "@angular/common";

export type ToolTipMethod = (d1: Datumn, d2?: Datumn, allD1?: Datumn[], allD2?: Datumn[]) => string;

export const defaultToolTipMethod: ToolTipMethod = (d1: Datumn, d2: Datumn): string => {
  return `  Something       something else
            ${d1.data}     ${d2.data}`;
};

export const lineChartTimeOfDayToolTip: ToolTipMethod = (d1: Datumn): string => {
  return `${(new DatePipe("en-US")).transform(d1.time, "fullDate")}  <-->  ${d1.data[0]}:${d1.data[1].toString().padStart(2, "0")}`;
};

export const lineChartNumberToolTip: ToolTipMethod = (d1: Datumn): string => {
  return `${(new DatePipe("en-US")).transform(d1.time, "fullDate")}  <-->  ${d1.data}`;
};

export const scatterChartTimeOfDayToolTip: ToolTipMethod = (d1: Datumn, d2: Datumn): string => {
  return `${getStringFromDateObjectFormat(d2.data)}  <-->  ${getStringFromDateObjectFormat(d1.data)}`;
};

const getStringFromDateObjectFormat = (timeOfDayObject: number[]): string => {
  return `${timeOfDayObject[0]}:${timeOfDayObject[1].toString().padStart(2, "0")}`;
};
