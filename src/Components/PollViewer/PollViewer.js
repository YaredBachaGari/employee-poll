import React, { useEffect, useRef } from "react";
import Avatar from "../Avatar/Avatar";
import "./PollViewer.css";
import { handlePostingAnswer } from "../../Redux-handler/Actions/Answer";
import { useDispatch } from "react-redux";
import { styleButtons } from "../../utils/helper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PollViewer = ({ pollData, answered }) => {
  const isVoted = useSelector((state) => state.Answers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionA = useRef();
  const optionB = useRef();
  const ButtonA = useRef(0);
  const ButtonB = useRef(0);
  const authedUser = pollData?.authedUser;
  const qid = pollData?.qid;
  const id = qid;
  const onSelectHandler = (option) => {
    if (option === "optionOne") {
      dispatch(
        handlePostingAnswer(
          { authedUser, qid, answer: option },
          id,
          option,
          authedUser
        )
      );
      styleButtons(option, optionA, optionB, ButtonA, ButtonB);
      navigate("/home");
      navigate(`/questions/${qid}`);
    }
    if (option === "optionTwo") {
      dispatch(
        handlePostingAnswer(
          { authedUser, qid, answer: option },
          id,
          option,
          authedUser
        )
      );
      styleButtons(option, optionA, optionB, ButtonA, ButtonB);
      navigate("/home");
      navigate(`/questions/${qid}`);
    }
  };
  useEffect(() => {
    if (answered) {
      styleButtons(answered, optionA, optionB, ButtonA, ButtonB);
    }
  }, [answered]);

  return (
    <div>
      <div>
        <p className="question-heading">{`Poll By ${pollData?.author}`}</p>
        <div className="profileAvatar2">
          <Avatar className="pollviewer-avatar" AvatarUrl={pollData?.avatar} />
        </div>
      </div>
      <p className="question-heading">Would You Rather</p>
      <div className="choices">
        <div ref={optionA} className="option">
          <p>{pollData?.optionOne?.text}</p>
          <button
            ref={ButtonA}
            data-id="button1"
            onClick={(e) => onSelectHandler("optionOne")}
          >
            Click
          </button>
        </div>
        <div ref={optionB} className="option">
          <p>{pollData?.optionTwo?.text}</p>
          <button
            ref={ButtonB}
            data-id="button2"
            onClick={(e) => onSelectHandler("optionTwo")}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollViewer;
