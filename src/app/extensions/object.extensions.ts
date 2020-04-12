export { }; // this will make it module

declare global {
  interface Object {
    getDataFromGroup(objectFilter: objectFilter, groupKeyFilter?: groupKeyFilter): any[];
  }
}
export type groupKeyFilter = (key: string) => boolean;
export type objectFilter = (obj: any) => boolean;
// convert [key: string]: T[]} to T[] with filters run
Object.prototype.getDataFromGroup = function(objFilter: objectFilter, keyFilter?: groupKeyFilter): any[] {
  const data = Object.keys(this).filter(keyFilter).map(key => this[key]).flat();
  return data.filter(objFilter);
};
