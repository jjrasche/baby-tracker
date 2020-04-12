import { Observable, BehaviorSubject } from "rxjs";

export { }; // this will make it module

declare module "rxjs" {
  interface Observable<T> {
    toBehaviorSubject(initial?: any): BehaviorSubject<T> ;
  }
}

Observable.prototype.toBehaviorSubject = function(initial: any = null): BehaviorSubject<any> {
  const subject = new BehaviorSubject(initial);
  this.subscribe({
      complete: () => subject.complete(),
      error: x => subject.error(x),
      next: x => subject.next(x)
  });
  return subject;
};
