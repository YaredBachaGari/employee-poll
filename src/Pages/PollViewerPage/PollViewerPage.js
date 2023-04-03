import React, { useEffect } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollViewer from "../../Components/PollViewer/PollViewer";
import "./PollViewerPage.css";
import HOC from "../../Components/HigherOrderComp/HOC";
import { _saveQuestionAnswer } from "../../_DATA";

const PollViewerPage = ({ Questions, allUsers, AuthUser }) => {
  // useEffect(() => {
  //   const x = async () => {
  //     const authedUser = AuthUser.loggedInUser.username;
  //     const qid = Questions.data["8xf0y6ziyjabvozdd253nd"];
  //     const answer = "optionOne";
  //     const y = await _saveQuestionAnswer({ authedUser, qid, answer });
  //     console.log(y);
  //   };
  //   x()
  // }, []);
  return (
    <>
      <Navbar />
      <div className="poll-option-section">
        <PollViewer
          Questions={Questions}
          allUsers={allUsers}
          AuthUser={AuthUser}
        />
      </div>
    </>
  );
};

export default HOC(PollViewerPage);
