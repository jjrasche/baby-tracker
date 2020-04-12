import { Entry } from "@models/entry";

export { }; // this will make it module
// tslint:disable:no-string-literal

declare global {
  interface Array<T> {
    groupBy(getGroupValue: (a: T) => any): {[key: string]: T[]};
    groupByProperties(properties: string[]): {[key: string]: T[]};
    selectGroupByAndAggregate(properties: string[], aggFunc?: aggregateFunction[]): any[];
    unique(): T[];
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
    (rv[key] = rv[key] || []).push(new Entry(x));
    return rv;
  }, {});
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
