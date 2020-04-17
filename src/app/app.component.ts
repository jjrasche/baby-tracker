import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, OnInit} from "@angular/core";
import { EntryService } from "./services/entry.service";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";
import { Observable, of, BehaviorSubject, timer, interval } from "rxjs";
import { ScriptLoaderService, RawChartComponent } from "angular-google-charts";
import { NapService } from "./services/nap.service";
import { SleepEntry } from "@models/sleep";
import { mergeMap, map, tap } from "rxjs/operators";
import { TimelineService } from "./services/timeline.service";
import { ChartData } from "@models/chart-data";
import { activityTimeline } from "./column-configs";

@Component({
  selector: "bm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  JSON = JSON;
  @ViewChild(RawChartComponent) chartElement: RawChartComponent;
  public title: string;
  stackedChartOptions: google.visualization.ColumnChartOptions;

  public charts: ChartData[];
  public selectedChart: ChartData;
  public selectedEntries: Observable<Entry[]>;
  private num = 1;
  loading = true;
  // getNumObservable = () => interval(1000).pipe(map(() => {
  //   const ret: any[][] = [];
  //   const internal = [this.num++];
  //   ret.push(internal);
  //   return ret;
  // })).toBehaviorSubject("lsdjf")
  // num$ = interval(1000).pipe(map(() => [[this.num++]])).toBehaviorSubject("lsdjf");
  // num$ = interval(1000).toBehaviorSubject("lsdjf");
  getTypeof = (thing: any) => typeof thing;

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
        console.log("file read");
        const data: Entry[] = parserService.ParseData(csvString);
        console.log("parsed");
        entryService.addEntries(data);
        this.loading = false;
        cdr.markForCheck();
        console.log("entries added");
        // this.napService.napTimeByChildChartData("Theodore").subscribe((d) => console.log(d));
        // const bs = new BehaviorSubject(5);
        // this.num$.subscribe((d) => console.log(d));
      });
      this.initData();
  }

  ngOnInit() {
    this.stackedChartOptions = {
      isStacked: true,
      explorer: {
        actions: ["dragToPan"],
        axis: "horizontal",
      },
      hAxis: {
        viewWindow: {
          min: new Date(2020, 3, 18),
          max: new Date(2020, 4, 18)
        },
      },
      vAxis: {
        title: "minutes",
        viewWindow: {
          min: 0,
          max: 1100
        },
      },
    };
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
      {
        type: "ColumnChart",
        title: "sleep / nap sum (theodore)",
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
        data$: this.napService.napTimeByChildChartData("Theodore")
      },
      {
        type: "ColumnChart",
        title: "sleep / nap sum (charlie)",
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
        data$: this.napService.napTimeByChildChartData("Charlie")
      },
      {
        type: "Timeline",
        title: "s,djfsd",
        columns: activityTimeline,
        data$: this.timeLineService.getTimelineByChildChartData("Charlie")
      },
      // {
      //   name: "naps per day",
      //   chartData: this.napService.numNapsPerDayChartData
      // },
      // {
      //   name: "naps  per day (charlie)",
      //   chartData: this.napService.numNapsPerDayByChildChartData("Charlie")
      // },
      // {
      //   name: "naps per day (theodore)",
      //   chartData: this.napService.numNapsPerDayByChildChartData("Theodore")
      // }
    ];
    this.selectedChart = this.charts[0];
    this.cdr.markForCheck();
  }
}
