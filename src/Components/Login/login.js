import React, { useEffect, useState } from "react";
import "./login.css";
import { connect } from "react-redux";
import { handleUserFetch } from "../../Redux-handler/Actions/Users";
import { useNavigate } from "react-router-dom";
import { AuthenticateUserSuccess } from "../../Redux-handler/Actions/AuthUser";

const Login = ({ AuthenticateUser, fetchUsers, UserData, Auth }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { data } = UserData;
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
  useEffect(() => {
    fetchUsers();
  }, []);
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
          navigate("/home");
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
      AuthenticateUser(user);
    }
  };

  console.log(Auth);

  return (
    <div className="login-container">
      {error && <p style={{ color: "red" }}>{error}!!!</p>}
      <div className="input-container">
        <label htmlFor="username">User</label>
        <input
          id="username"
          value={userInfo.username}
          name="username"
          placeholder="user"
          onChange={onchangeHandler}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={userInfo.password}
          name="password"
          placeholder="Password"
          onChange={onchangeHandler}
        />
      </div>
      <div className="login-btn">
        <button className="btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { UserData: state.Users, Auth: state.AuthUser };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(handleUserFetch()),
    AuthenticateUser: (user) => dispatch(AuthenticateUserSuccess(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
