import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux-handler/Actions/AuthUser";

const Navbar = ({ AuthUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, avatarURL } = AuthUser.loggedInUser;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/leaderboard" className="link">
          LeaderBoard
        </Link>
        <Link to="/add" className="link">
          New
        </Link>
      </div>
      <div className="avatar-logout">
        <div className="avatar-username profileAvatar">
          <Avatar AvatarUrl={avatarURL} />
          <span>{username}</span>
        </div>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    AuthUser: state.AuthUser,
  };
};

export default connect(mapStateToProps)(Navbar);
