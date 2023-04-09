import React, { useState, useEffect } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollViewer from "../../Components/PollViewer/PollViewer";
import "./PollViewerPage.css";
import { useParams } from "react-router-dom";
import HOC from "../../Components/HigherOrderComp/HOC";
import NotFound from "../../Components/NotFound/NotFound";
import VoteResult from "../../Components/VoteResult/VoteResult";
import { useSelector } from "react-redux";
import { selectedInfo,filterData } from "../../utils/helper";

const PollViewerPage = ({allUsers,AuthUser, Questions}) => {
  const answer = useSelector((state) => state.Answers);
  const [result, setResult] = useState({});
  const qid = useParams()?.questionId;
  const authuser = AuthUser?.loggedInUser?.username;

  const loadVoteSummary = () => {
    filterData(Questions, AuthUser);
    const selected = selectedInfo(qid, Questions, allUsers, AuthUser);
    const optionOnevoters = selected?.optionOne?.votes.length;
    const optionTwovoters = selected?.optionTwo?.votes.length;
    const totalVote = optionOnevoters + optionTwovoters;
    let UserChoice = "";
    if (optionOnevoters || optionTwovoters) {
      if (selected?.optionOne.votes.includes(authuser)) {
        UserChoice = "optionOne";
      } else {
        UserChoice = "optionTwo";
      }
    }
    setResult({
      id: selected.id,
      textOptions: {
        one: selected?.optionOne?.text,
        two: selected?.optionTwo?.text,
      },
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
        optionOne: (optionOnevoters / selected?.NoOfallUsers) * 100,
        optionTwo: (optionTwovoters / selected?.NoOfallUsers) * 100,
      },
      pollData: selected?.pollData,
    });
  };
  useEffect(() => {
    loadVoteSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Questions, answer]);

  return (
    <>
      <Navbar AuthUser={AuthUser} />
      {result?.pollData?.author ? (
        <div className="poll-option-section">
          <PollViewer pollData={result?.pollData} answered={result?.id} />
        </div>
      ) : (
        <div className="notfoundmsg">
          <NotFound />
        </div>
      )}
      {(result?.id || result?.id === answer?.option) && ( //display result issue
        <div className="voteresult-summary">
          <VoteResult result={result} />
        </div>
      )}
    </>
  );
};

export default HOC(PollViewerPage);
