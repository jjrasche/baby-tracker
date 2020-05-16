import { Entry } from "@models/entry";
import { FactoryService } from "../services/factory.service";
import { SleepEntry } from "@models/sleep";

export { }; // this will make it module
// tslint:disable:no-string-literal

export enum SortDirection {
  Ascending,
  Descending
}

declare global {
  interface Array<T> {
    groupBy(getGroupValue: (a: T) => any): {[key: string]: T[]};
    sortByProperty(property: string, direction?: SortDirection): T[];
    groupByProperties(properties: string[], direction?: SortDirection): {[key: string]: T[]};
    selectGroupByAndAggregate(properties: string[], aggFunc?: aggregateFunction[]): any[];
    unique(): T[];
    last(): T;
    getDateRange(): [Date, Date];
  }
}
// common aggregate functions
export type aggregateFunction = (arr: any[], groupObject: object) => void;
export const countAggregateFunction = (arr: any[], groupObject: object) => {
  groupObject["count"] = arr.length;
};
export const sumPropertyAggregateFunction = (property: string) => (arr: any[], groupObject: object) => {
  const sum = arr.reduce((acc, curr) => {
    return acc + curr[property];
  }, 0);
  groupObject["sum"] = sum;
};

Array.prototype.selectGroupByAndAggregate = function(properties: string[], aggFunctions?: aggregateFunction[]): any[] {
  const groupMap = this.groupByProperties(properties);
  const groupedWithCount = Object.keys(groupMap)
    .map(key => groupMap[key])
    .map((group: any[]) => {
      const ret = {};
      properties.forEach(prop => ret[prop.toString()] = group[0][prop.toString()]);
      aggFunctions.forEach(aggFunc => aggFunc(group, ret));
      return ret;
      }
    );
  return groupedWithCount;
};

Array.prototype.groupByProperties = function(properties: string[]) {
  const groupMethod = e => properties.map(prop => e[prop].toString()).join("-");
  return this.groupBy(groupMethod);
};

Array.prototype.groupBy = function(getGroupValue: (a: any) => any) {
  return this.reduce((rv, x) => {
    const key = getGroupValue(x);
    // the immutable solved one issue where, but limits what this comes out as.
    const factory = new FactoryService(x.constructor);
    const immutableCopy = factory.getNew(x);
    (rv[key] = rv[key] || []).push(immutableCopy);
    return rv;
  }, {});
};

Array.prototype.sortByProperty = function(property: string, direction: SortDirection = SortDirection.Ascending) {
  const sorted = (this as []).sort((a, b) => {
    if (direction === SortDirection.Ascending) {
      return a[property] - b[property];
    } else {
      return b[property] - a[property];
    }
  });
  return sorted;
};

Array.prototype.unique = function(): [] {
  // tslint:disable-next-line:triple-equals
  const uniqueItems = [];
  return this.filter(item => {
    const stringified = JSON.stringify(item);
    if (!uniqueItems.find(ui => ui === stringified)) {
      uniqueItems.push(stringified);
      return true;
    }
    return false;
  });
};

Array.prototype.last = function(): any {
  // tslint:disable-next-line:triple-equals
  return this[this.length - 1];
};

Array.prototype.getDateRange = function(): [Date, Date] {
  const sortedArray = this.sort();
  return [sortedArray.last(), sortedArray[0]];
};
