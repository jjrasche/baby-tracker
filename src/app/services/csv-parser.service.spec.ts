import { TestBed } from "@angular/core/testing";

import { CsvParserService } from "./csv-parser.service";
import { Entry } from "@models/entry";

// tslint:disable:max-line-length

const babyCsvData = `Start Time,End Time,Activity,Duration (min),Quantity,Extra data,Text,Notes,Caregiver,Child Name
2019-10-31 20:26,2019-10-31 20:56,"Bottle",21,90.0,"Formula","Charlie drank 90 ml of formula (21m)",,"Karen","Charlie"
2019-10-31 20:42,2019-10-31 20:42,"Diaper",,,"Wet","Charlie had a wet diaper (medium)",,"Karen","Charlie"
2019-10-31 19:10,2019-10-31 19:25,"Expressed",15,60,"ml","60 ml Expressed (30L, 30R) (15m)",,"Justine","Charlie"
2019-10-31 19:12,2019-10-31 19:15,"Bottle",3,10.0,"Formula","Charlie drank 10 ml of formula (3m)",,"Jim","Charlie"
2019-10-31 19:10,2019-10-31 19:10,"Diaper",,,"Wet","Charlie had a wet Diaper (small)",,"Jim","Charlie"
2019-10-31 18:56,2019-10-31 18:56,"Diaper",,,"BM+Wet","Charlie had a poopy and wet diaper (leak, large)",,"Karen","Charlie"
2019-10-31 18:30,2019-10-31 18:50,"Bottle",20,30.0,"Formula","Charlie drank 30 ml of formula (20m)",,"Karen","Charlie"
2019-10-31 18:06,2019-10-31 18:12,"Nursing",6,,,"Charlie nursed (6m left)",,"Justine","Charlie"
2019-10-31 17:53,2019-10-31 18:02,"Nursing",9,,,"Charlie nursed (9m left)",,"Justine","Charlie"`;


const testCsvDataHeader = `Start Time,End Time,Activity,Duration (min),Quantity,Extra data,Text,Notes,Caregiver,Child Name`;
const validTestDataRow1 = `2019-10-31 20:26,2019-10-31 20:56,"Bottle",21,90.0,"Formula","Charlie drank 90 ml of formula (21m)",,"Karen","Charlie"`;
const Row1WithCommaString = `2019-10-31 20:26,2019-10-31 20:56,"Bot,tle",21,90.0,"Formula","Charlie drank 90 ml of formula (21m)",,"Karen","Charlie"`;
const validTestDataRow2 = `2019-10-31 20:42,2019-10-31 20:42,"Diaper",,,"Wet","Charlie had a wet diaper (medium)",,"Karen","Charlie"`;
const rowMissingColumn = `2019-10-31 19:10,2019-10-31 19:10,"Diaper",,,"Wet",`;
const invalidNumberTestDataColumn = `2019-10-31 18:30,2019-10-31 18:50,"Bottle",supposedToBeANumber,30.0,"Formula","Charlie drank 30 ml of formula (20m)",,"Karen","Charlie"`;
const invalidDateTestDataColumn = `supposedToBeADate,2019-10-31 18:02,"Nursing",9,,,"Charlie nursed (9m left)",,"Justine","Charlie"`;

const row1Object = {
  startTime: new Date("2019-10-31 20:26"),
  endTime: new Date("2019-10-31 20:56"),
  activity: `Bottle`,
  duration: 21,
  quantity: 90.0,
  extraData: `Formula`,
  text: `Charlie drank 90 ml of formula (21m)`,
  notes: null,
  caregiver: `Karen`,
  childName: `Charlie`,
} as Entry;
const row2Object = {
  startTime: new Date("2019-10-31 20:42"),
  endTime: new Date("2019-10-31 20:42"),
  activity: `Diaper`,
  duration: null,
  quantity: null,
  extraData: `Wet`,
  text: `Charlie had a wet diaper (medium)`,
  notes: null,
  caregiver: `Karen`,
  childName: `Charlie`,
} as Entry;

describe("CsvParserService", () => {
  let service: CsvParserService;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({});
    service = testBed.get(CsvParserService);
  });

  it("parsing works on test data", () => {
    const nonHederRows = [validTestDataRow1, validTestDataRow2];
    const data = [testCsvDataHeader, ...nonHederRows].join("\n");
    const actual = service.ParseData(data);
    expect(actual).toEqual([row1Object, row2Object]);
  });
  it("skip empty lines", () => {
    const data = [testCsvDataHeader, "", validTestDataRow1].join("\n");
    const actual = service.ParseData(data);
    expect(actual).toEqual([row1Object]);
  });
  it("handles commas in strings", () => {
    const data = [testCsvDataHeader, Row1WithCommaString].join("\n");
    const actual = service.ParseData(data);
    const expected = {...row1Object} as Entry;
    expected.activity = "Bot,tle";
    expect(actual).toEqual([expected]);
  });
  it("parsing throws error when cell Date data can't be formatted into model", () => {
    const data = [testCsvDataHeader, validTestDataRow1, invalidDateTestDataColumn].join("\n");
    const failingCellValue = invalidDateTestDataColumn.split(",")[0];
    expect(() => service.ParseData(data)).toThrowError(
      `Error Parsing Cell: Row(2), column(startTime) can't convert "${failingCellValue}" to date`);
  });
  it("parsing throws error when cell number data can't be formatted into model", () => {
    const data = [testCsvDataHeader, validTestDataRow2, invalidNumberTestDataColumn].join("\n");
    const failingCellValue = invalidNumberTestDataColumn.split(",")[3];
    expect(() => service.ParseData(data)).toThrowError(
      `Error Parsing Cell: Row(2), column(duration) can't convert "${failingCellValue}" to number`);
  });
  it("parsing throws error when row length doesn't match header length", () => {
    const data = [testCsvDataHeader, validTestDataRow1, validTestDataRow2, rowMissingColumn].join("\n");
    expect(() => service.ParseData(data)).toThrowError("Error Parsing Row(3): has 7 columns 10 were expected");
  });
});
