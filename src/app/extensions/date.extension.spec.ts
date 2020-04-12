import { TestBed } from "@angular/core/testing";

import { CsvParserService } from "../services/csv-parser.service";
import { Entry } from "@models/entry";
import { EntryService } from "../services/entry.service";
import { AppModule } from "../app.module";
import { SleepEntry } from "@models/sleep";

describe("Array Extension", () => {
  let service: EntryService;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({imports: [AppModule]});
    service = testBed.get(EntryService);
  });

  it("daysBetween 1 day", () => {
    const firstDate = new Date("2019-12-31 19:55");
    const secondDate = new Date("2020-01-1 02:13");
    const actual = firstDate.daysBetween(secondDate);
    expect(actual).toEqual(1);
  });
  it("daysBetween 0 day", () => {
    const firstDate = new Date("2019-12-31 00:00");
    const secondDate = new Date("2019-12-31 23:55");
    const actual = firstDate.daysBetween(secondDate);
    expect(actual).toEqual(0);
  });
  it("daysBetween 366 days", () => {
    const firstDate = new Date("2019-12-31 19:55");
    const secondDate = new Date("2021-01-2 02:13");
    const actual = firstDate.daysBetween(secondDate);
    expect(actual).toEqual(366);
  });
  it("daysBetween 366 days reverse", () => {
    const firstDate = new Date("2021-01-2 02:13");
    const secondDate = new Date("2019-12-31 19:55");
    const actual = firstDate.daysBetween(secondDate);
    expect(actual).toEqual(366);
  });
  it("daysBetween 10 years ", () => {
    const firstDate = new Date("2010-01-2 02:13");
    const secondDate = new Date("2020-01-2 19:55");
    const actual = firstDate.daysBetween(secondDate);
    expect(actual).toEqual(366);
  });
  it("daysBetween 1 day reverse", () => {
    const firstDate = new Date("2020-01-1 02:13");
    const secondDate = new Date("2019-12-31 19:55");
    const actual = firstDate.daysBetween(secondDate);
    expect(actual).toEqual(1);
  });
  it("addDays +1", () => {
    const date = new Date("2019-12-31 19:55");
    const actual = date.addDays(1);
    expect(actual).toEqual(new Date("2020-01-1 19:55"));
  });
  it("addDays +32 days", () => {
    const date = new Date("2019-12-31 19:55");
    const actual = date.addDays(32);
    expect(actual).toEqual(new Date("2020-02-1 19:55"));
  });
  it("addDays -1", () => {
    const date = new Date("2019-12-31 19:55");
    const actual = date.addDays(-1);
    expect(actual).toEqual(new Date("2019-12-30 19:55"));
  });
});
