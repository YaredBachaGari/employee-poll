import React, { useState, useEffect } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollViewer from "../../Components/PollViewer/PollViewer";
import "./PollViewerPage.css";
import { useParams } from "react-router-dom";
import HOC from "../../Components/HigherOrderComp/HOC";
import NotFound from "../../Components/NotFound/NotFound";
import VoteResult from "../../Components/VoteResult/VoteResult";
const PollViewerPage = ({ Questions, allUsers, AuthUser }) => {
  const [result, setResult] = useState({});
  const [isVoted, setIsVoted] = useState(false);
  const qid = useParams()?.questionId;
  const data = Questions?.data[qid];
  const author = data?.author;
  const optionOne = data?.optionOne;
  const optionTwo = data?.optionTwo;
  const avatar = allUsers?.data[author]?.avatarURL;
  const authuser = AuthUser?.loggedInUser?.username;
  const NoOfallUsers = Object.keys(allUsers.data).length;
  const pollData = {
    qid,
    author,
    avatar,
    authedUser: authuser,
    optionOne,
    optionTwo,
  };

  const loadVoteSummary = () => {
    const optionOnevoters = optionOne?.votes.length;
    const optionTwovoters = optionTwo?.votes.length;
    const totalVote = optionOnevoters + optionTwovoters;
    let UserChoice = "";
    if (optionOnevoters || optionTwovoters) {
      if (optionOne.votes.includes(authuser)) {
        UserChoice = "optionOne";
      } else {
        UserChoice = "optionTwo";
      }
    }
    setResult({
      textOptions: { one: optionOne?.text, two: optionTwo?.text },
      loggedInUserChoice: UserChoice,
      votersNo: {
        optionOne: optionOnevoters,
        optionTwo: optionTwovoters,
        total: totalVote,
      },
      percentageSofar: {
        optionOne: (optionOnevoters / totalVote) * 100,
        optionTwo: (optionTwovoters / totalVote) * 100,
      },
      percentageTotal: {
        optionOne: (optionOnevoters / NoOfallUsers) * 100,
        optionTwo: (optionTwovoters / NoOfallUsers) * 100,
      },
    });
  };
  useEffect(() => {
    loadVoteSummary();
  }, []);
  return (
    <>
      <Navbar AuthUser={AuthUser} />
      {author ? (
        <div className="poll-option-section">
          <PollViewer pollData={pollData} setIsVoted={setIsVoted} />
        </div>
      ) : (
        <div className="notfoundmsg">
          <NotFound />
        </div>
      )}
      {isVoted && (
        <div className="voteresult-summary">
          <VoteResult result={result} />
        </div>
      )}
    </>
  );
};

export default HOC(PollViewerPage);
