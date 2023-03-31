import React from "react";
import "./Avatar.css";

const Avatar = ({ className = "" }) => {
  return (

      <div className={className || "profileImg"}>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          alt="avatar"
        />
    </div>
  );
};

export default Avatar;
