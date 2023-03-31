import React from "react";
import "./PollCard.css";

const PollCard = () => {
  return (
    <div className="card-container">
      <div className="card-text">
        <p className="username">username</p>
        <p className="polldate">
          <span>4:15PM</span> | <span>11/23/2023</span>
        </p>
      </div>

      <button>Show</button>
    </div>
  );
};

export default PollCard;
