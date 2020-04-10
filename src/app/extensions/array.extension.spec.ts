import { TestBed } from "@angular/core/testing";

import { CsvParserService } from "../services/csv-parser.service";
import { Entry } from "@models/entry";
import { EntryService } from "../services/entry.service";
import { AppModule } from "../app.module";
import { SleepEntry } from "@models/sleep";

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
// tslint:disable:max-line-length
const entry1 =  { startTime: new Date("2020-01-19T12:06:00.000Z"), endTime: new Date("2020-01-19T12:36:00.000Z"), activity: "Sleep", duration: 30, quantity: null, extraData: null, text: "Charlie slept (30m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry2 =  { startTime: new Date("2020-01-19T12:06:00.000Z"), endTime: new Date("2020-01-19T12:36:00.000Z"), activity: "Sleep", duration: 30, quantity: null, extraData: null, text: "Charlie slept (30m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry3 =  { startTime: new Date("2020-01-19T12:06:00.000Z"), endTime: new Date("2020-01-19T12:36:00.000Z"), activity: "Sleep", duration: 30, quantity: null, extraData: null, text: "Charlie slept (30m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry4 =  { startTime: new Date("2020-01-19T12:27:00.000Z"), endTime: new Date("2020-01-19T13:09:00.000Z"), activity: "Sleep", duration: 42, quantity: null, extraData: null, text: "Theodore slept (42m)", notes: null, caregiver: "Jim", childName: "Theodore", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry5 =  { startTime: new Date("2020-01-19T14:46:00.000Z"), endTime: new Date("2020-01-19T15:11:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Charlie slept (25m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry6 =  { startTime: new Date("2020-01-19T14:46:00.000Z"), endTime: new Date("2020-01-19T15:11:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Charlie slept (25m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry7 =  { startTime: new Date("2020-01-19T14:46:00.000Z"), endTime: new Date("2020-01-19T15:11:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Charlie slept (25m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry8 =  { startTime: new Date("2020-01-19T15:00:00.000Z"), endTime: new Date("2020-01-19T16:32:00.000Z"), activity: "Sleep", duration: 92, quantity: null, extraData: null, text: "Theodore slept (1h32m)", notes: null, caregiver: "Justine", childName: "Theodore", sleepType: "nap", fullCycle: true } as SleepEntry;
const entry9 =  { startTime: new Date("2020-01-19T16:31:00.000Z"), endTime: new Date("2020-01-19T17:06:00.000Z"), activity: "Sleep", duration: 36, quantity: null, extraData: null, text: "Charlie slept (36m)", notes: null, caregiver: "Justine", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry10 =  { startTime: new Date("2020-01-19T16:31:00.000Z"), endTime: new Date("2020-01-19T17:06:00.000Z"), activity: "Sleep", duration: 36, quantity: null, extraData: null, text: "Charlie slept (36m)", notes: null, caregiver: "Justine", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry11 =  { startTime: new Date("2020-01-19T16:31:00.000Z"), endTime: new Date("2020-01-19T17:06:00.000Z"), activity: "Sleep", duration: 36, quantity: null, extraData: null, text: "Charlie slept (36m)", notes: null, caregiver: "Justine", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry12 =  { startTime: new Date("2020-01-19T18:27:00.000Z"), endTime: new Date("2020-01-19T19:20:00.000Z"), activity: "Sleep", duration: 48, quantity: null, extraData: null, text: "Theodore slept (48m)", notes: null, caregiver: "Jim", childName: "Theodore", sleepType: "nap", fullCycle: true } as SleepEntry;
const entry13 =  { startTime: new Date("2020-01-19T18:35:00.000Z"), endTime: new Date("2020-01-19T20:12:00.000Z"), activity: "Sleep", duration: 97, quantity: null, extraData: null, text: "Charlie slept (1h37m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: true } as SleepEntry;
const entry14 =  { startTime: new Date("2020-01-19T18:35:00.000Z"), endTime: new Date("2020-01-19T20:12:00.000Z"), activity: "Sleep", duration: 97, quantity: null, extraData: null, text: "Charlie slept (1h37m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: true } as SleepEntry;
const entry15 =  { startTime: new Date("2020-01-19T18:35:00.000Z"), endTime: new Date("2020-01-19T20:12:00.000Z"), activity: "Sleep", duration: 97, quantity: null, extraData: null, text: "Charlie slept (1h37m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: true } as SleepEntry;
const entry16 =  { startTime: new Date("2020-01-19T21:32:00.000Z"), endTime: new Date("2020-01-19T21:57:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Theodore slept (25m)", notes: null, caregiver: "Justine", childName: "Theodore", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry17 =  { startTime: new Date("2020-01-19T21:54:00.000Z"), endTime: new Date("2020-01-19T22:19:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Charlie slept (25m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry18 =  { startTime: new Date("2020-01-19T21:54:00.000Z"), endTime: new Date("2020-01-19T22:19:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Charlie slept (25m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;
const entry19 =  { startTime: new Date("2020-01-19T21:54:00.000Z"), endTime: new Date("2020-01-19T22:19:00.000Z"), activity: "Sleep", duration: 25, quantity: null, extraData: null, text: "Charlie slept (25m)", notes: null, caregiver: "Jim", childName: "Charlie", sleepType: "nap", fullCycle: false } as SleepEntry;

fdescribe("Array Extension", () => {
  let service: EntryService;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({imports: [AppModule]});
    service = testBed.get(EntryService);
  });

  it("duplicate entries are removed when added to service", () => {
    const data = [row1Object, row1Object];
    const actual = data.unique();
    expect(actual).toEqual([row1Object]);
  });

  it("duplicate entries are removed when added to service 2", () => {
    const data = [row1Object, row1Object, row2Object, row2Object, row2Object];
    const actual = data.unique();
    expect(actual).toEqual([row1Object, row2Object]);
  });

  it("duplicate entries are removed when added to service 3", () => {
    const data = [entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8, entry9, entry10, entry11, entry12, entry13, entry14, entry15, entry16, entry17, entry18, entry19];
    const actual = data.unique();
    expect(actual.length).toEqual(9);
  });
});
