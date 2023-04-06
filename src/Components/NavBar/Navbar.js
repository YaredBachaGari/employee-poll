import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux-handler/Actions/AuthUser";

const Navbar = ({ AuthUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = AuthUser?.loggedInUser?.username;
  const avatarURL = AuthUser?.loggedInUser?.avatarURL;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <Link to="/home" className="link" data-testid="home">
          Home
        </Link>
        <Link to="/leaderboard" className="link" data-testid="leaderBoard">
          LeaderBoard
        </Link>
        <Link to="/add" className="link" data-testid="newpoll">
          New
        </Link>
      </div>
      <div className="avatar-logout">
        <div className="avatar-username profileAvatar">
          <Avatar AvatarUrl={avatarURL} />
          <span data-testid="username">{username}</span>
        </div>
        <button
          data-testid="logout"
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

export default Navbar;
