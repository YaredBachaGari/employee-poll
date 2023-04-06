import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import VoteResult from "../../Components/VoteResult/VoteResult";
import "./VoteResultPage.css";
import { useParams } from "react-router-dom";
import NotFound from "../../Components/NotFound/NotFound";
import HOC from "../../Components/HigherOrderComp/HOC";

const VoteResultPage = ({ allUsers, AuthUser, Questions }) => {
  const [result, setResult] = useState({
    text: "",
    votersNo: "",
    percentage: "",
  });
  const qid = useParams()?.questionId;
  const data = Questions?.data[qid]
  const optionOne = data?.optionOne;
  const optionTwo = data?.optionTwo;
  const authuser = AuthUser?.loggedInUser?.username;
  const NoOfallUsers = Object.keys(allUsers.data).length;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <div className="voteresult-summary">
        {data ? (
          <VoteResult result={result} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default HOC(VoteResultPage);
