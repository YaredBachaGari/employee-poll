import React from "react";
import PollCard from "../PollCoard/PollCard";
import "./PollContainer.css"

const PollCointainer = ({category}) => {
  return (
    <div className="poll-container">
      <header className="header-container">
        <h3>{category}</h3>
      </header>
      <ul className="listof-pollcards">
        <li className="individual-card">
          <PollCard />
          <PollCard />
          <PollCard />
          <PollCard />
          <PollCard />
        </li>
      </ul>
    </div>
  );
};

export default PollCointainer;
