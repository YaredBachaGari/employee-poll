import React, { useState } from "react";
import "./loginStyle.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthenticateUserSuccess } from "../../Redux-handler/Actions/AuthUser";
import { useDispatch } from "react-redux";

const Login = ({ UserData, Auth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirectPath = localStorage.getItem("redirectPath");
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const data = UserData?.data;
  const onchangeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let foundUser = false;
    let user;
    if (userInfo?.username && userInfo?.password) {
      for (let key in data) {
        if (
          data[key]?.password === userInfo?.password &&
          key === userInfo?.username
        ) {
          const { id, name, avatarURL } = data[key];
          user = { id, username: key, name, avatarURL };
          ///navigate("/home");
          if (redirectPath) {
            //localStorage.removeItem("redirectPath");
             //<Navigate to={redirectPath} replace />;
             navigate(redirectPath)
          } else {
            navigate('/home')
             //<Navigate to="/home" replace />;
          }
          setUserInfo({ username: "", password: "" });
          foundUser = true;
          break;
        }
      }
      if (!foundUser) {
        setError("Incorrect Password or userName");
      }
    } else {
      setError("No Password or userName entered");
    }
    if (foundUser && user) {
      dispatch(AuthenticateUserSuccess(user));
    }
  };

  return (
    <div className="login-container">
      {error && <p style={{ color: "red" }}>{error}!!!</p>}
      <div className="input-container">
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          value={userInfo.username}
          name="username"
          placeholder="username"
          onChange={onchangeHandler}
          data-testid="username"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={userInfo.password}
          name="password"
          placeholder="Password"
          onChange={onchangeHandler}
          data-testid="password"
        />
      </div>
      <div className="login-btn">
        <button data-testid="loginbtn" className="btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
