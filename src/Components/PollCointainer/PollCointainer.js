import React from "react";
import PollCard from "../PollCoard/PollCard";
import "./PollContainer.css";

const PollCointainer = ({ category, allUsers, AuthUser, data }) => {
  return (
    <div className="poll-container">
      <header className="header-container">
        <h3>{category}</h3>
      </header>
      <ul className="listof-pollcards">
        <li className="individual-card">
          {data.map((survey) => {
            return (
              <PollCard key={survey.id} AuthUser={AuthUser} survey={survey} category={category} />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default PollCointainer;
