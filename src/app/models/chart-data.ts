import { BehaviorSubject } from "rxjs";
import { Child } from "./entry";
import { activityTimelineColuns } from "../column-configs";

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

export const SleepStackedChart = (child: Child): ChartData => {
  return {
    type: "ColumnChart",
    title: `sleep stacked - ${child}`,
    columns: ["date", "sleep", "naps"],
    options: {
      isStacked: true,
      explorer: {
        actions: ["dragToPan"],
        axis: "horizontal",
      },
      hAxis: {
        viewWindow: {
          min: (new Date()).addDays(-30),
          max: new Date()
        },
      },
      vAxis: {
        title: "minutes",
        viewWindow: {
          min: 0,
          max: 1100
        },
      },
    },
    data$: this.napService.napTimeByChildChartData(child)
  };
};

export const ActivityTimelienChart = (child: Child): ChartData => {
  return {
    type: "Timeline",
    title: `timeline - ${child}`,
    columns: activityTimelineColuns,
    data$: this.timeLineService.getTimelineByChildChartData(child)
  };
};
