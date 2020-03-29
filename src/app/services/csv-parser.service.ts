import { Injectable, Type } from "@angular/core";
import { Event } from "@models/event";

/**
 * Assumptions:
 *  - class variables and headers are in the same order
 */
@Injectable({
  providedIn: "root"
})
export class CsvParserService {
  private lineDeliminator = "\n";
  private columnDeliminator = ",";
  private emptyCellOutput = null;
  private invalidDate = new Date("not a date").toString();
  private invalidNumber = parseInt("not a number", 10).toString();
  private dateType = "date";
  private numberType = "number";
  private stringType = "string";

  // "Error Parsing Row: Row 4 only has 2 columns 3 were expected";

  ParseData(csvString: string): Event[] {
    const dataArray: Event[] = [];
    const lines = csvString.split(this.lineDeliminator);
    const headers = lines.shift().split(this.columnDeliminator);
    lines.forEach((line, idx) => {
      const row = idx + 1;
      const columns = line.split(this.columnDeliminator);
      if (columns.length !== headers.length) {
        throw new Error(`Error Parsing Row(${row}): has ${columns.length} columns ${headers.length} were expected`);
      }
      const event = {
        startTime: this.Convert(columns[0], this.dateType, "startTime", row),
        endTime: this.Convert(columns[1], this.dateType, "endTime", row),
        activity: this.Convert(columns[2], this.stringType, "activity", row),
        duration: this.Convert(columns[3], this.numberType, "duration", row),
        quantity: this.Convert(columns[4], this.numberType, "quantity", row),
        extraData: this.Convert(columns[5], this.stringType, "extraData", row),
        text: this.Convert(columns[6], this.stringType, "text", row),
        notes: this.Convert(columns[7], this.stringType, "notes", row),
        caregiver: this.Convert(columns[8], this.stringType, "caregiver", row),
        childName: this.Convert(columns[9], this.stringType, "childName", row),
      } as Event;
      dataArray.push(event);
    });
    return dataArray;
  }

  private Convert(value: string, type: string, columnName: string, row: number): any {
    let ret: any;
    if (value === "") {
      return this.emptyCellOutput;
    }
    // convert
    if (type === this.dateType) {
      ret = new Date(value);
    } else if (type === this.numberType) {
      ret = parseInt(value, 10);
    } else {
      ret = value;
    }
    // conversion checks
    if ([this.invalidDate, this.invalidNumber].find(str => str === ret.toString())) {
      throw new Error(`Error Parsing Cell: Row(${row}), column(${columnName}) can't convert "${value}" to ${type}`);
    }
    return ret;
  }
}
