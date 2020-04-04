/// <reference types="google.visualization"/>
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EntryService } from "./services/entryservice";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";
import { Observable } from "rxjs";

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

  public selectedChart: Chart;
  public charts: Chart[] = [
    {
      name: "naps per day",
      chartData: this.entryService.numNapsPerDayChartData
    },
    {
      name: "naps per day (charlie)",
      chartData: this.entryService.numNapsPerDayByChildChartData("Charlie")
    },
    {
      name: "naps per day (theodore)",
      chartData: this.entryService.numNapsPerDayByChildChartData("Theodore")
    }
  ];

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
