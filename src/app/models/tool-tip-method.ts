import { DataSet } from "./data-set";

export type ToolTipMethod = (d1: DataSet, d2?: DataSet, allD1?: DataSet[], allD2?: DataSet[]) => string;

export const defaultToolTipMethod: ToolTipMethod = (d1: DataSet, d2: DataSet): string => {
  return `  Something       something else
            ${d1.data}     ${d2.data}`;
};
