import React from "react";
import "./PollForm.css";

const PollForm = () => {
  return (
    <div className="pollform-container">
      <div>
        <p className="formheading">Would You Rather</p>
        <p className="suggestion">Create Your Own Poll</p>
      </div>

      <div className="pollform-input-container">
        <label htmlFor="firstoption">First Option</label>
        <input id="firstoption" value="" placeholder="Option one" />
      </div>
      <div className="pollform-input-container">
        <label htmlFor="secondoption">Second Option</label>
        <input id="secondoption" value="" placeholder="Option two" />
      </div>
      <div className="pollform-btn">
        <button className="btn" disabled="true">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PollForm;
