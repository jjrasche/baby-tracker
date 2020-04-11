export { }; // this will make it module

declare global {
  interface Array<T> {
    groupBy(getGroupValue: (a: T) => any): {[key: string]: T[]};
    selectGroupByAndCount(properties: string[]): any[];
    unique(): T[];
  }
}

Array.prototype.selectGroupByAndCount = function(properties: string[]): any[] {
  const groupMap = this.groupBy(e => properties.map(prop => e[prop].toString()).join("-")); // `${e.entryDate.toString()}-${e.childName}`);
  const groupedWithCount = Object.keys(groupMap)
    .map(key => groupMap[key])
    .map((group: any[]) => {
      const ret = {};
      properties.forEach(prop => {
        const propName = prop.toString();
        ret[propName] = group[0][propName];
      });
      (ret as any).count = group.length;
      return ret;
      }
    );
  return groupedWithCount;
};


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
