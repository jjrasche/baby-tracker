export class FactoryService {
  constructor(private objectType) {}
  getNew(initial: any): object {
    return new this.objectType(initial);
  }
}
