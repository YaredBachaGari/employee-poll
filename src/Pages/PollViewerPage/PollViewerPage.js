import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollViewer from "../../Components/PollViewer/PollViewer";
import "./PollViewerPage.css";
import { useParams } from "react-router-dom";
import HOC from "../../Components/HigherOrderComp/HOC";
import NotFound from "../../Components/NotFound/NotFound";

const PollViewerPage = ({ Questions, allUsers, AuthUser }) => {
  const params = useParams();
  const qid = params?.questionId;
  const author = Questions?.data[qid]?.author;
  const optionOne = Questions?.data[qid]?.optionOne;
  const optionTwo = Questions?.data[qid]?.optionTwo;
  const avatar = allUsers?.data[author]?.avatarURL;
  const authedUser = AuthUser?.loggedInUser?.username;
  return (
    <>
      <Navbar />
      {author ? (
        <div className="poll-option-section">
          <PollViewer
            author={author}
            optionOne={optionOne}
            optionTwo={optionTwo}
            avatar={avatar}
            authedUser={authedUser}
            qid={qid}
          />
        </div>
      ) : (
        <div className="notfoundmsg"><NotFound /></div>
        
      )}
    </>
  );
};

export default HOC(PollViewerPage);
