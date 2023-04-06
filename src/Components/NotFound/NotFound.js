import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import HOC from "../HigherOrderComp/HOC";

const NotFound = ({ AuthUser }) => {
  const { loggedInUser } = AuthUser;
  return (
    <div className="notfound">
      <h1>404 | Page Not Found</h1>
      {loggedInUser?.id ? (
        <Link to="/home" data-testid="gohome">Back to home</Link>
      ) : (
        <Link to="/" data-testid="signIn">Sign In</Link>
      )}
    </div>
  );
};

export default HOC(NotFound);
