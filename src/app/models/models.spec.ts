import { Entry } from "./entry";
import { SleepEntry } from "./sleep";

describe("models test", () => {
  it("nap type set properly", () => {
    const actual = new SleepEntry({startTime: new Date("2020-01-25 03:34:00.000")} as Entry);
    expect(actual.sleepType).toEqual("sleep");
  });

  it("nap type set properly", () => {
    const actual = new SleepEntry({startTime: new Date("2020-01-27 12:05:00.000")} as Entry);
    expect(actual.sleepType).toEqual("nap");
  });
});
