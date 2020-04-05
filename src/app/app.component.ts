/// <reference types="google.visualization"/>
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EntryService } from "./services/entryservice";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";
import { Observable, of } from "rxjs";

class Chart {
  name: string;
  chartData: Observable<google.visualization.ChartSpecs>;
}

@Component({
  selector: "bm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title: string;
  public chartData: any;

  public charts: Chart[] = [
    // {
    //   name: "test",
    //   chartData: of({
    //     chartType: "ColumnChart",
    //     dataTable: new google.visualization.DataTable({
    //       cols: [{id: "task", label: "Task", type: "string"},
    //              {id: "hours", label: "Hours per Day", type: "number"}],
    //       rows: [{c: [{v: "Work"}, {v: 11}]},
    //              {c: [{v: "Eat"}, {v: 2}]},
    //              {c: [{v: "Commute"}, {v: 2}]},
    //              {c: [{v: "Watch TV"}, {v: 2}]},
    //              {c: [{v: "Sleep"}, {v: 7, f: "7.000"}]}]
    //       }, 0.6),
    //     options: {title: "Countries"},
    //     containerId: "visualization"
    //   })
    // },
    {
      name: "naps per day",
      chartData: this.entryService.numNapsPerDayChartData
    },
    {
      name: "naps  per day (charlie)",
      chartData: this.entryService.numNapsPerDayByChildChartData("Charlie")
    },
    {
      name: "naps per day (theodore)",
      chartData: this.entryService.numNapsPerDayByChildChartData("Theodore")
    },
    {
      name: "naps per day (January)",
      chartData: this.entryService.numNapsPerDayByMonthChartData(new Date("2020-1-1"))
    }
  ];
  public selectedChart: Chart = this.charts[0];

constructor(
    public entryService: EntryService,
    parserService: CsvParserService,
    fileReader: LocalFileReader
    ) {
      fileReader.readFile("assets/data/baby-data.csv").subscribe((csvString: string) => {
        const data: Entry[] = parserService.ParseData(csvString);
        entryService.addEntries(data);
      });
  }
}
