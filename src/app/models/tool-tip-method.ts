import { Datumn } from "./datumn";

export type ToolTipMethod = (d1: Datumn, d2?: Datumn, allD1?: Datumn[], allD2?: Datumn[]) => string;

export const defaultToolTipMethod: ToolTipMethod = (d1: Datumn, d2: Datumn): string => {
  return `  Something       something else
            ${d1.data}     ${d2.data}`;
};
