import React from "react";
import { connect } from "react-redux";

function Actions({ dispatch }) {
  const changeUserLanguage = () =>
    dispatch({
      type: "CHANGE_USER_LANGUAGE",
      payload: ["pl", "en", "de", "ru", "es"][Math.round(Math.random() * 4)]
    });

  const addSomeTodo = () =>
    dispatch({
      type: "ADD_TODO",
      payload: { text: `Some todo #${Date.now()}` }
    });

  return (
    <div>
      <h4>Actions</h4>
      <button onClick={changeUserLanguage}>Change User language</button>
      <button onClick={addSomeTodo}>Add some Todo</button>
    </div>
  );
}

export default connect(null, dispatch => ({ dispatch }))(Actions);
