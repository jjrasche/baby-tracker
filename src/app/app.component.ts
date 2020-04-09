import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild} from "@angular/core";
import { EntryService } from "./services/entry.service";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";
import { Observable, of } from "rxjs";
import { ScriptLoaderService, RawChartComponent } from "angular-google-charts";
import { NapService } from "./services/nap.service";

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
  @ViewChild(RawChartComponent) chartElement: RawChartComponent;
  public title: string;

  public charts: Chart[];
  public selectedChart: Chart;

  constructor(
    private entryService: EntryService,
    private napService: NapService,
    parserService: CsvParserService,
    fileReader: LocalFileReader,
    private cdr: ChangeDetectorRef,
    public chartsLoaderService: ScriptLoaderService
    ) {
      // google.load("visualization", "1.0", {packages: ["table"]});
      // google.setOnLoadCallback(this.initData.bind(this));
      // chartsLoaderService.onReady.pipe(take(1)).subscribe(() => (this.initData()));
      fileReader.readFile("assets/data/baby-data.csv").subscribe((csvString: string) => {
        const data: Entry[] = parserService.ParseData(csvString);
        entryService.addEntries(data);
      });
      this.initData();
  }

  initData() {
    this.charts = [
      {
        name: "test",
        chartData: this.entryService.testChart()
      },
      {
        name: "naps per day",
        chartData: this.napService.numNapsPerDayChartData
      },
      {
        name: "naps  per day (charlie)",
        chartData: this.napService.numNapsPerDayByChildChartData("Charlie")
      },
      {
        name: "naps per day (theodore)",
        chartData: this.napService.numNapsPerDayByChildChartData("Theodore")
      },
      {
        name: "naps per day (January)",
        chartData: this.napService.numNapsPerDayByMonthChartData(new Date("2020-1-1"))
      }
    ];
    this.selectedChart = this.charts[0];
    this.cdr.markForCheck();
  }
}
