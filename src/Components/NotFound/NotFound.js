import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 | Page Not Found</h1>
      <Link to="/home">Back to home</Link>
    </div>
  );
};

export default NotFound;
