import { TestBed } from "@angular/core/testing";

import { CsvParserService } from "./csv-parser.service";
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
const validTestDataRow2 = `2019-10-31 20:42,2019-10-31 20:42,"Diaper",,,"Wet","Charlie had a wet diaper (medium)",,"Karen","Charlie"`;
const rowMissingColumn = `2019-10-31 19:10,2019-10-31 19:10,"Diaper",,,"Wet",`;
const invalidDateTestDataColumn = `2019-10-31 18:30,2019-10-31 18:50,"Bottle",supposedToBeANumber,30.0,"Formula","Charlie drank 30 ml of formula (20m)",,"Karen","Charlie"`;
const invalidNumberTestDataColumn = `supposedToBeADate,2019-10-31 18:02,"Nursing",9,,,"Charlie nursed (9m left)",,"Justine","Charlie"`;

describe("CsvParserService", () => {
  let service: CsvParserService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.get(CsvParserService);
    const testBed = TestBed.configureTestingModule({});
    service = testBed.get(CsvParserService);
  });

  fit("parsing works on test data", () => {
    const nonHederRows = [validTestDataRow1, validTestDataRow2];
    const data = [testCsvDataHeader, ...nonHederRows].join("\n");
    const actual = service.ParseData(data);
    const expected = nonHederRows.map(row => convertStringToTestData(row));
    expect(actual).toEqual(expected);
  });
  it("parsing works on test data", () => {
    const nonHederRows = [validTestDataRow1, validTestDataRow2];
    const data = [testCsvDataHeader, ...nonHederRows].join("\n");
    const actual = service.ParseData(data);
    const expected = nonHederRows.map(row => convertStringToTestData(row));
    expect(actual).toEqual(expected);
  });
  it("parsing throws error when cell Date data can't be formatted into model", () => {
    const data = [testCsvDataHeader, validTestDataRow1, invalidDateTestDataColumn].join("\n");
    const failingCellValue = invalidDateTestDataColumn.split(",")[1];
    expect(() => service.ParseData(data)).toThrowError(
      `Error Parsing Cell: Row: 3, column:"time" can't convert "${failingCellValue}" to date`);
  });
  it("parsing throws error when cell number data can't be formatted into model", () => {
    const data = [testCsvDataHeader, validTestDataRow2, invalidNumberTestDataColumn].join("\n");
    const failingCellValue = invalidNumberTestDataColumn.split(",")[0];
    expect(() => service.ParseData(data)).toThrowError(
      `Error Parsing Cell: Row: 3, column:"num" can't convert "${failingCellValue}" to number`);
  });
  it("parsing throws error when row length doesn't match header length", () => {
    const data = [testCsvDataHeader, validTestDataRow1, validTestDataRow2, rowMissingColumn].join("\n");
    expect(() => service.ParseData(data)).toThrowError("Error Parsing Row: Row 4 only has 2 columns where 3 expected");
  });

  const convertStringToTestData = (str: string): Event => {
    const columns = str.split(",");
    return {
      startTime: new Date(columns[0]),
      endTime: new Date(columns[1]),
      activity: columns[2],
      duration: parseInt(columns[3], 10),
      quantity: parseInt(columns[4], 10),
      extraData: columns[5],
      text: columns[6],
      notes: columns[7],
      caregiver: columns[8],
      childName: columns[9]
    } as unknown as Event;
  };
});
