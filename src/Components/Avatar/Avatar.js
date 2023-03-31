import React from "react";
import "./Avatar.css";

const Avatar = () => {
  return (
    <div className="profileAvatar">
      <div className="profileImg">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          alt="avatar"
        />
      </div>
      <span>Jone Doe</span>
    </div>
  );
};

export default Avatar;
