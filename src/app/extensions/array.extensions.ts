export { }; // this will make it module

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
