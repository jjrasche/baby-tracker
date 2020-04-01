import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EntryService } from "./services/entryservice";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";

@Component({
  selector: "bm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title: string;
  public chartData: any;

  constructor(
    public entryService: EntryService,
    parserService: CsvParserService,
    fileReader: LocalFileReader
    ) {
      fileReader.readFile("assets/data/baby-data-january.csv").subscribe((csvString: string) => {
        const data: Entry[] = parserService.ParseData(csvString);
        entryService.addEntries(data);
      });

      this.chartData = {
        chartType: "ColumnChart",
        dataTable: [["", "Germany", "USA", "Brazil", "Canada", "France", "RU"],
                    ["", 700, 300, 400, 500, 600, 800]],
        options: {title: "Countries"},
        containerId: "vis_div"
      };
  }

}
