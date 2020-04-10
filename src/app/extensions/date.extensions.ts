export { }; // this will make it module

declare global {
  interface Date {
    sameMonth(monthDate: Date): boolean;
    sameDate(date: Date): boolean;
    convertToChartDateStringDay(): string;
    convertToChartDateStringTime(): string;
  }
}

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

// "Date(Year, Month, Day, Hours, Minutes, Seconds, Milliseconds)"

