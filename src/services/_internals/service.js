import { BehaviorSubject } from "rxjs";

export class Service {
  constructor(initialValue = null) {
    if (new.target === Service)
      throw new Error("Abstract class, won't construct.");

    this.data$ = new BehaviorSubject(initialValue);
  }

  get currentValue() {
    return this.data$.value;
  }
}
