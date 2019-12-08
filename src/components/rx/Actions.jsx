import React from "react";
import { getService } from "../../services";
import { UserService } from "../../services/user.service";
import { TodosService } from "../../services/todos.service";

function Actions() {
  const userService = getService(UserService);
  const todosService = getService(TodosService);

  const changeUserLanguage = () =>
    userService.changeUserLanguage(
      ["pl", "en", "de", "ru", "es"][Math.round(Math.random() * 4)]
    );

  const addSomeTodo = () => todosService.addTodo(`Some todo #${Date.now()}`);

  return (
    <div>
      <h4>Actions</h4>
      <button onClick={changeUserLanguage}>Change User language</button>
      <button onClick={addSomeTodo}>Add some Todo</button>
    </div>
  );
}

export default Actions;
