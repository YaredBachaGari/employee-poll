import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import VoteResult from "../../Components/VoteResult/VoteResult";
import "./VoteResultPage.css";
import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";
import NotFound from "../../Components/NotFound/NotFound";
import HOC from "../../Components/HigherOrderComp/HOC";

const VoteResultPage = ({ allUsers, AuthUser, Questions }) => {
  // const { questions, authUser, users } = useSelector((state) => ({
  //   questions: state.Questions,
  //   authUser: state.AuthUser,
  //   users: state.Users,
  // }));
  const [result, setResult] = useState({
    text: "",
    votersNo: "",
    percentage: "",
  });
  const qid = useParams()?.questionId;
  const optionOne = Questions?.data[qid]?.optionOne;
  const optionTwo = Questions.data[qid]?.optionTwo;
  const authuser = AuthUser?.loggedInUser?.username;
  const NoOfallUsers = Object.keys(allUsers.data).length;

  const loadVoteSummary = () => {
    const optionOnevoters = optionOne?.votes.length;
    const optionTwovoters = optionTwo?.votes.length;
    let displayText = "";
    let percentageVote = "";
    let percentageTotal = "";
    if (optionOnevoters || optionTwovoters) {
      if (optionOne.votes.includes(authuser)) {
        displayText = optionOne.text;
        percentageVote =
          (optionOnevoters / (optionOnevoters + optionTwovoters)) * 100;
        percentageTotal = (optionOnevoters / NoOfallUsers) * 100;
      } else {
        displayText = optionTwo.text;
        percentageVote =
          (optionTwovoters / (optionOnevoters + optionTwovoters)) * 100;
        percentageTotal = (optionTwovoters / NoOfallUsers) * 100;
      }
    }

    setResult({
      text: displayText,
      votersNo: optionOnevoters + optionTwovoters,
      percentageSofar: percentageVote,
      percentageTotal: percentageTotal,
    });
  };
  useEffect(() => {
    loadVoteSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <div className="voteresult-summary">
        {result.text && result.percentageTotal ? (
          <VoteResult result={result} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default HOC(VoteResultPage);
