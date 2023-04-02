import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { connect } from "react-redux";

const Navbar = ({ AuthUser }) => {
  const { username, avatarURL } = AuthUser.loggedInUser;
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
        <Link to="/" className="logout">
          Logout
        </Link>
        {/* <button>Logout</button> */}
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
