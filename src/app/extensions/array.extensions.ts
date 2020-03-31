export { }; // this will make it module

// declare global { // this is important to access it as global type String
//   interface Array<T> {
//     groupBy<T>(getGroupValue: (a: T) => any): {[key: string]: T[]};
//   }
// }

declare global {
  interface Array<T> {
    groupBy(getGroupValue: (a: T) => any): {[key: string]: T[]};
    unique(): T[];
  }
}

Array.prototype.groupBy = function(getGroupValue: (a: any) => any) {
  return this.reduce((rv, x) => {
    const key = getGroupValue(x);
    (rv[key] = rv[key] || []).push(x);
    return rv;
  }, {});
};

Array.prototype.unique = function(): [] {
  return this.filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i);
};
