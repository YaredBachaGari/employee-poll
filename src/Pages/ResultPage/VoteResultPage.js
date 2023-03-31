import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import VoteResult from "../../Components/VoteResult/VoteResult";
import "./VoteResultPage.css";

const VoteResultPage = () => {
  return (
    <div>
      <Navbar />
      <div className="voteresult-summary">
        <VoteResult />
      </div>
    </div>
  );
};

export default VoteResultPage;
