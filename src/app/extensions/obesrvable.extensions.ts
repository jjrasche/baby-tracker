import { Observable, BehaviorSubject } from "rxjs";

export { }; // this will make it module

declare module "rxjs" {
  interface Observable<T> {
    toBehaviorSubject(this: Observable<T>): BehaviorSubject<T> ;
  }
}

Observable.prototype.toBehaviorSubject = function(this: Observable<any>): BehaviorSubject<any> {
  const subject = new BehaviorSubject(null);
  this.subscribe({
      complete: () => subject.complete(),
      error: x => subject.error(x),
      next: x => subject.next(x)
  });
  return subject;
};
