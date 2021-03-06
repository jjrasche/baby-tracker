import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { EntryService } from "./services/entry.service";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";
import { BehaviorSubject } from "rxjs";
import { NapService } from "./services/nap.service";
import { ChartData } from "@models/chart-data";
import { ChartDataService } from "./services/chart-data.service";
import { DataSetService } from "./services/data-set.service";
import { ChartType } from "@models/chart-type";

@Component({
  selector: "bm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public charts: BehaviorSubject<ChartData>[];
  public selectedChart$: BehaviorSubject<ChartData>;
  loading = true;
  height = "100%";
  width = "100%";
  JSON = JSON;
  ChartType = ChartType;

  constructor(
    private entryService: EntryService,
    public napService: NapService,
    parserService: CsvParserService,
    fileReader: LocalFileReader,
    private cdr: ChangeDetectorRef,
    private chartDataService: ChartDataService,
    public dataSetService: DataSetService
    ) {
      // google.load("visualization", "1.0", {packages: ["table"]});
      // google.setOnLoadCallback(this.initData.bind(this));
      // chartsLoaderService.onReady.pipe(take(1)).subscribe(() => (this.initData()));
      fileReader.readFile("assets/data/baby-data.csv").subscribe((csvString: string) => {
        const data: Entry[] = parserService.ParseData(csvString);
        this.entryService.addEntries(data);
        this.loading = false;
        cdr.markForCheck();
      });
      this.initData();
      this.selectedChart$.subscribe(() => cdr.markForCheck());
  }

  selectHandler(item: any) {
    this.selectedChart$.value.selectMethod(item);
  }

  initData() {
    this.charts = [
      this.chartDataService.createLineChart(this.dataSetService.nightTimeSleepDuration("Charlie")),
      this.chartDataService.createLineChart(this.dataSetService.nightTimeSleepDuration("Theodore")),
      this.chartDataService.createScatterChart(
        this.dataSetService.morningWakeUptime("Charlie"),
        this.dataSetService.bedTimeStart("Charlie")),
      this.chartDataService.createScatterChart(
        this.dataSetService.morningWakeUptime("Theodore"),
        this.dataSetService.bedTimeStart("Theodore")),
      this.chartDataService.createLineChart(this.dataSetService.morningWakeUptime("Charlie")),
      this.chartDataService.createLineChart(this.dataSetService.morningWakeUptime("Theodore")),
      this.chartDataService.createWordCloud("Diary Word Cloud", this.dataSetService.diaryWordFrequency()),
      this.chartDataService.createWordCloud("All Entered Text Word Cloud", this.dataSetService.descriptionsPlusDiaryWordFrequency()),
      this.chartDataService.createWordCloud("Non-Diary Word Cloud", this.dataSetService.nonDiaryWordFrequency()),
      this.chartDataService.createLineChart(this.dataSetService.urineAmount("Charlie")),
      this.chartDataService.createLineChart(this.dataSetService.pooAmount("Charlie"))
      // this.chartDataService.createWokeUpBedTimeChart(),
      // this.chartDataService.createWokeUpFirstNapStartChart(),
      // this.chartDataService.createSleepStackedChart("Theodore"),
      // this.chartDataService.createSleepStackedChart("Charlie"),
      // this.chartDataService.createActivityTimelienChart("Theodore"),
      // this.chartDataService.createActivityTimelienChart("Charlie"),
    ];
    this.selectedChart$ = this.charts[0];
    this.cdr.markForCheck();
  }
}
