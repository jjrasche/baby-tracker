import { Injectable } from "@angular/core";

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

  ParseData(csvString: string): Event[] {
    const dataArray: Event[] = [];
    const lines = csvString.split(this.lineDeliminator);
    const headers = lines.shift().split(this.columnDeliminator);
    lines.forEach(line => {
      const columns = line.split(this.columnDeliminator);
      dataArray.push({
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
      } as unknown as Event);
    });
    return dataArray;
  }
}
