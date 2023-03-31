import React from "react";
import Avatar from "../Avatar/Avatar";
import "./PollViewer.css";

const PollViewer = () => {
  return (
    <div>
      <div>
        <p className="question-heading">Poll By UserName</p>
        <div className="profileAvatar2">
           <Avatar className="pollviewer-avatar" /> 
        </div>
      </div>
      <p className="question-heading">Would You Rather</p>
      <div className="choices">
        <div className="option">
          <p>option A</p>
          <button>Click</button>
        </div>
        <div className="option">
          <p>option B</p>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
};

export default PollViewer;
