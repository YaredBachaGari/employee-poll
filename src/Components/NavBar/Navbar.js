import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/leaderboard" className="link">
          LeaderBoard
        </Link>
        <Link to="/new" className="link">
          New
        </Link>
      </div>
      <div className="avatar-logout">
        <div className="avatar-username profileAvatar">
          <Avatar />
          <span>Jone Doe</span>
        </div>
        <Link to="/" className="logout">
        Logout
        </Link>
        {/* <button>Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
