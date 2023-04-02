import React, { useRef } from "react";
import Avatar from "../Avatar/Avatar";
import "./PollViewer.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {handlePostingAnswer} from  "../../Redux-handler/Actions/Answer"

const PollViewer = ({ Questions, allUsers,postAnswer, AuthUser }) => {
  const params = useParams();
  const qid=params?.questionId
  const { author, optionOne, optionTwo } = Questions?.data[qid];
  const avatar = allUsers?.data[author]?.avatarURL;
  const optionA = useRef();
  const optionB = useRef();
  const ButtonA = useRef(0);
  const ButtonB = useRef(0);
  const onSelectHandler = (buttonId) => {
    if (buttonId === "button1") {
      const answer ="optionOne"
      const authedUser = AuthUser.loggedInUser.username
      postAnswer({authedUser, qid, answer})
      optionA.current.style.border = "1px solid green";
      ButtonA.current.style.backgroundColor = "green";
      ButtonB.current.setAttribute("disabled", true);
      ButtonB.current.style.backgroundColor = "#cccccc";
      ButtonB.current.style.color = "#666666";
      
    }
    if (buttonId === "button2") {
      console.log("option 2 clicked");
      optionB.current.style.border = "1px solid green";
      ButtonB.current.style.backgroundColor = "green";
      ButtonA.current.setAttribute("disabled", true);
      ButtonA.current.style.backgroundColor = "#cccccc";
      ButtonA.current.style.color = "#666666";
    }
  };


  return (
    <div>
      <div>
        <p className="question-heading">{`Poll By ${author}`}</p>
        <div className="profileAvatar2">
          <Avatar className="pollviewer-avatar" AvatarUrl={avatar} />
        </div>
      </div>
      <p className="question-heading">Would You Rather</p>
      <div className="choices">
        <div ref={optionA} className="option">
          <p>{optionOne?.text}</p>
          <button
            ref={ButtonA}
            data-id="button1"
            onClick={(e) => onSelectHandler(e.target.dataset.id)}
          >
            Click
          </button>
        </div>
        <div 
        ref={optionB} 
        className="option"
        >
          <p>{optionTwo?.text}</p>
          <button
            ref={ButtonB}
            data-id="button2"
            onClick={(e) => onSelectHandler(e.target.dataset.id)}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    Answers: state.Answers,
  };
};

const mapDispatchToProps =(dispatch)=>{
  return {
    postAnswer: (data)=>dispatch(handlePostingAnswer(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PollViewer);
