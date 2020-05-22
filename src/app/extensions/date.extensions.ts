import * as moment from "moment";

export { }; // this will make it module
export const defaultBaseDateString = "2000-1-1";

export class DateRange {
  start: Date;
  end: Date;
}

declare global {
  interface Date {
    epoch(): number;
    time(): Date;
    dateOnly(): Date;
    addDays(numDays: number): Date;
    daysBetween(d: Date): number;
    yearsBetween(d: Date): number;
    sameMonth(monthDate: Date): boolean;
    sameDate(date: Date): boolean;
    convertToChartDateStringDay(): string;
    convertToChartDateStringTime(): string;
    compareDate(date: Date): number;
    getTimeOfDayObject(): number[];
    getChartDateTime(): string;
    minutesSinceStartOfDay(): number;
    minutesUntilEndOfDay(): number;
  }
}

Date.prototype.addDays = function(numDays: number): Date {
  const tempDate = new Date(this);
  tempDate.setDate(tempDate.getDate() + numDays);
  return tempDate;
};

Date.prototype.daysBetween = function(d: Date): number {
  return Math.abs(moment(this).diff(moment(d), "days"));
};

Date.prototype.yearsBetween = function(d: Date): number {
  const a = this.getFullYear();
  const b = d.getFullYear();
  return Math.abs(a - b);
};

Date.prototype.time = function(): Date {
  const time = new Date(defaultBaseDateString);
  time.setHours(this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
  return time;
};

Date.prototype.dateOnly = function(): Date {
  const dateOnly = new Date(this);
  dateOnly.setHours(0, 0, 0, 0);
  return dateOnly;
};

Date.prototype.sameMonth = function(monthDate: Date): boolean {
  return this.getMonth() === monthDate.getMonth();
};

Date.prototype.sameDate = function(date: Date): boolean {
  return this.getDate() === date.getDate() && this.sameMonth(date);
};

Date.prototype.convertToChartDateStringDay = function(): string {
  const year = this.getFullYear();
  const month = this.getMonth();
  const date = this.getDate();
  return `Date(${year}, ${month}, ${date}, 0, 0, 0, 0)`;
};

Date.prototype.convertToChartDateStringTime = function(): string {
  const year = this.getFullYear();
  const month = this.getMonth();
  const date = this.getDate();
  const hours = this.getHours();
  const minutes = this.getMinutes();
  return `Date(${year}, ${month}, ${date}, ${hours}, ${minutes}, 0, 0)`;
};

Date.prototype.epoch = function(): number {
  return this.valueOf();
};

Date.prototype.compareDate = function(d: Date): number {
  if (d.getTime() === this.getTime()) {
    return 0;
  }
  if (d > this) {
    return 1;
  }
  if (d < this) {
    return -1;
  }
};

Date.prototype.getTimeOfDayObject = function(): number[] {
  return [this.getHours(), this.getMinutes(), this.getSeconds()];
};

Date.prototype.getChartDateTime = function(): string {
  return moment(this).format("ddd MMM D");
};

Date.prototype.minutesSinceStartOfDay = function(): number {
  const dayStart = this.dateOnly();
  const diff = moment(this).diff(moment(dayStart), "minutes");
  return Math.abs(diff);
};

Date.prototype.minutesUntilEndOfDay = function(): number {
  const dayEnd = this.dateOnly().addDays(1);
  const diff = moment(this).diff(moment(dayEnd), "minutes");
  return Math.abs(diff);
};

