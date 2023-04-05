import React from "react";
import "./PollCard.css";
import { formatDate, formatTime } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const PollCard = ({ survey, category }) => {
  const { id, author, timestamp } = survey;
  const SurveyDate = formatDate(timestamp);
  const SurveyTime = formatTime(timestamp);
  const navigate = useNavigate();
  const handleClick = () => {
    if (category === "New Questions") {
      if (id) {
        navigate(`/questions/${id}`);
      } else {
        navigate("/questions/notfound");
      }
    }
    if (category === "Done") {
      if (id) {
        navigate(`/result/${id}`);
      } else {
        navigate("/questions/notfound");
      }
    }
  };

  return (
    <div className="card-container">
      <div className="card-text">
        <p className="username">{author}</p>
        <p className="polldate">
          <span>{SurveyTime}</span> | <span>{SurveyDate}</span>
        </p>
      </div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default PollCard;
