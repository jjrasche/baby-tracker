import { Component } from "@angular/core";
import { EntryService } from "./services/entryservice";
import { CsvParserService } from "./services/csv-parser.service";
import { LocalFileReader } from "./services/local-file-reader.service";
import { Entry } from "@models/entry";

@Component({
  selector: "bm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "BabyMonitor";

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
