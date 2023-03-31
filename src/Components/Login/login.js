import React from "react";
import "./login.css"

const Login = () => {
  return (
    <div className="login-container">
      <div className="input-container">
        <label htmlFor="username">User</label>
        <input id="username" value="" placeholder="user" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input id="password" value="" placeholder="Password" />
      </div>
      <div className="login-btn">
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Login;
