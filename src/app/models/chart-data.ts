import { Observable } from "rxjs/internal/Observable";
import { BehaviorSubject } from "rxjs";

export class ChartData {
  title: string;
  // tslint:disable-next-line:max-line-length
  type: "AnnotationChart" | "AreaChart" | "Bar" | "BarChart" | "BubbleChart" | "Calendar" | "CandlestickChart" | "ColumnChart" | "ComboChart" | "PieChart" | "Gantt" | "Gauge" | "GeoChart" | "Histogram" | "Line" | "LineChart" | "Map" | "OrgChart" | "Sankey" | "Scatter" | "ScatterChart" | "SteppedAreaChart" | "Table" | "Timeline" | "TreeMap" | "WordTree";
  columns: string[];
  getData: () => BehaviorSubject<any[][]>;
  selectMethod?: (event: google.visualization.VisualizationSelectionArray[]) => void;
}
