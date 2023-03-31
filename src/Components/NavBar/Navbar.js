import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <Link to="/" className="link">
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
        <Avatar />
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
