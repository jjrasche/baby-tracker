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
      complete: () => {
        console.log("complete");
        subject.complete();
      },
      error: x => {
        console.log("error");
        subject.error(x);
      },
      next: x => {
        console.log("next");
        subject.next(x);
      }
  });
  return subject;
};
