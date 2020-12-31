export class ChartData {
  title: string;
  // tslint:disable-next-line:max-line-length
  type: string;
  columns?: any[];
  data: any[][];
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
            google.visualization.OrgChartOptions |
            WordCloud.Options
            = {};
  selectMethod?: (event: google.visualization.VisualizationSelectionArray[]) => void;
}
