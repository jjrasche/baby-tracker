import { Entry } from "./entry";
import { SleepEntry } from "./sleep";
import { defaultBaseDateString } from "../extensions/date.extensions";
    // tslint:disable: max-line-length

fdescribe("models test", () => {
  it("nap type set properly", () => {
    const actual = new SleepEntry({startTime: new Date("2020-01-25 03:34:00.000")} as Entry);
    expect(actual.sleepType).toEqual("sleep");
  });

  it("nap type set properly", () => {
    const actual = new SleepEntry({startTime: new Date("2020-01-27 12:05:00.000")} as Entry);
    expect(actual.sleepType).toEqual("nap");
  });

  fit("nap type set properly", () => {
    const actual = new SleepEntry({startTime: new Date("2020-03-25 15:57:00.000")} as Entry);

    // const actual = new SleepEntry(a); // ,"endTime":"2020-03-25 16:29:00.000","activity":"Sleep","duration":31,"quantity":null,"extraData":null,"text":"Theodore slept (31m)","notes":null,"caregiver":"Jim","childName":"Theodore","sleepType":"nap","fullCycle":false}`));
    expect(actual.sleepType).toEqual("nap");
  });

  it("getNormalizedStartEndTimes wihtin same day", () => {
    const entryDate = new Date("2020-01-27 00:00:00.000");
    const startTime = new Date("2020-01-27 12:05:00.000");
    const endTime = new Date("2020-01-27 12:10:00.000");
    const entry = new Entry({startTime, endTime} as Entry);
    const actual = entry.getNormalizedStartEndTimes(entryDate);
    expect(actual).toEqual([new Date(`${defaultBaseDateString} 12:05:00.000`), new Date(`${defaultBaseDateString} 12:10:00.000`)]);
  });
  it("getNormalizedStartEndTimes ends in next day", () => {
    const entryDate = new Date("2020-01-27 00:00:00.000");
    const startTime = new Date("2020-01-27 20:05:00.000");
    const endTime = new Date("2020-01-28 05:10:00.000");
    const entry = new Entry({startTime, endTime} as Entry);
    const actual = entry.getNormalizedStartEndTimes(entryDate);
    expect(actual).toEqual([new Date(`${defaultBaseDateString} 20:05:00.000`), new Date(`2000-1-2 05:10.000`)]);
  });
  it("getNormalizedStartEndTimes starts in previous", () => {
    const entryDate = new Date("2020-01-27 00:00:00.000");
    const startTime = new Date("2020-01-26 20:05:00.000");
    const endTime = new Date("2020-01-27 05:10:00.000");
    const entry = new Entry({startTime, endTime} as Entry);
    const actual = entry.getNormalizedStartEndTimes(entryDate);
    expect(actual).toEqual([new Date(`"1999-12-31 20:05:00.000`), new Date(`${defaultBaseDateString} 05:10.000`)]);
  });
});
