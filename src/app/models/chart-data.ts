import { Observable } from "rxjs/internal/Observable";
import { BehaviorSubject } from "rxjs";

export class ChartData {
  title: string;
  // tslint:disable-next-line:max-line-length
  type: "AnnotationChart" |
      "AreaChart" |
      "Bar" |
      "BarChart" |
      "BubbleChart" |
      "Calendar" |
      "CandlestickChart" |
      "ColumnChart" |
      "ComboChart" |
      "PieChart" |
      "Gantt" |
      "Gauge" |
      "GeoChart" |
      "Histogram" |
      "Line" |
      "LineChart" |
      "Map" |
      "OrgChart" |
      "Sankey" |
      "Scatter" |
      "ScatterChart" |
      "SteppedAreaChart" |
      "Table" |
      "Timeline" |
      "TreeMap" |
      "WordTree";
  columns: any[];
  data$: BehaviorSubject<any[][]>;
  options?: google.visualization.GeoChartOptions |
            google.visualization.ChartTrendlineOptions |
            google.visualization.ScatterChartOptions |
            google.visualization.ColumnChartOptions |
            google.visualization.LineChartOptions |
            google.visualization.BarChartOptions |
            google.visualization.AreaChartOptions |
            google.visualization.SteppedAreaChartOptions |
            google.visualization.PieChartOptions |
            google.visualization.BubbleChartOptions |
            google.visualization.CandlestickChartOptions |
            google.visualization.ComboChartOptions |
            google.visualization.OrgChartOptions
            = {};
  selectMethod?: (event: google.visualization.VisualizationSelectionArray[]) => void;
}
