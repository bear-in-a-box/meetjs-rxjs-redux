import { Service } from "./_internals/service";

export class TodosService extends Service {
  constructor() {
    super([]);
  }

  addTodo(text) {
    this.data$.next([...this.currentValue, text]);
  }

  clearTodos() {
    this.data$.next([]);
  }
}
