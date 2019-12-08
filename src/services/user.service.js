import { map } from "rxjs/operators";

import { Service } from "./_internals/service";

export class UserService extends Service {
  constructor() {
    super({
      login: "_anonymous_",
      email: "anony@mo.us",
      language: "en"
    });
  }

  login$ = this.data$.pipe(map(user => user.login));

  updateUser(user) {
    this.data$.next(user);
  }

  changeUserLanguage(language) {
    this.data$.next({ ...this.currentValue, language });
  }
}
