import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild} from "@angular/core";
import { EntryService } from "./services/entry.service";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";
import { Observable, of, BehaviorSubject } from "rxjs";
import { ScriptLoaderService, RawChartComponent } from "angular-google-charts";
import { NapService } from "./services/nap.service";
import { SleepEntry } from "@models/sleep";
import { mergeMap } from "rxjs/operators";
import { TimelineService } from "./services/timeline.service";

class Chart {
  name: string;
  chartData: BehaviorSubject<google.visualization.ChartSpecs>;
  selectMethod?: (event: google.visualization.VisualizationSelectionArray[]) => void;
}

@Component({
  selector: "bm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  JSON = JSON;
  @ViewChild(RawChartComponent) chartElement: RawChartComponent;
  public title: string;

  public charts: Chart[];
  public selectedChart: Chart;
  public selectedEntries: Observable<Entry[]>;

  constructor(
    private entryService: EntryService,
    private napService: NapService,
    private timeLineService: TimelineService,
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

  selectHandler(item: any) {
    this.selectedChart.selectMethod(item);
  }

  initData() {
    this.charts = [
      // {
      //   name: "naps per day (January)",
      //   chartData: this.napService.numNapsPerDayByMonthChartData(new Date("2020-1-1")),
      //   selectMethod: (event: google.visualization.VisualizationSelectionArray[]) => {
      //     this.selectedEntries = this.napService.numNapsPerDayByMonthChartData(new Date("2020-1-1"))
      //       .pipe(
      //         mergeMap((specs: google.visualization.ChartSpecs) => {
      //         const data = specs.dataTable[event[0].row + 1];
      //         const date = data[0];
      //         return this.napService.napEntriesByDate(date);
      //       }));
      //   }
      // },
      // {
      //   name: "test",
      //   chartData: this.entryService.testChart()
      // },
      // {
      //   name: "charlie timeline",
      //   chartData: this.timeLineService.getTimelineByChildChartData("Charlie")
      // },
      // {
      //   name: "naps per day",
      //   chartData: this.napService.numNapsPerDayChartData
      // },
      {
        name: "naps  per day (charlie)",
        chartData: this.napService.numNapsPerDayByChildChartData("Charlie")
      },
      // {
      //   name: "naps per day (theodore)",
      //   chartData: this.napService.numNapsPerDayByChildChartData("Theodore")
      // }
    ];
    this.selectedChart = this.charts[0];
    this.cdr.markForCheck();
  }
}
