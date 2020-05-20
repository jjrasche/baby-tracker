import { Datumn } from "./datumn";

export type dataType = "string" | "number" | "boolean" | "date" | "datetime" | "timeofday";

export class ChartColumn {
  title: string;
  dataType: dataType;
  data: Datumn[];
}
