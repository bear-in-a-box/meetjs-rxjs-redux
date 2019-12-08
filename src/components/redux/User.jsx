import React from "react";
import { connect } from "react-redux";

function User({ login }) {
  console.log("Redux: User rerenders");
  return (
    <div>
      <h4>User</h4>
      <p>{login}</p>
    </div>
  );
}

export default connect(state => {
  console.log("Redux: state mapper connected to User", state);
  return { login: state.user.login };
})(User);
