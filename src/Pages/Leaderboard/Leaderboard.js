import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./Leaderboard.css";
import SummaryTable from "../../Components/SummaryTable/SummaryTable";
import HOC from "../../Components/HigherOrderComp/HOC";

const Leaderboard = ({allUsers, AuthUser, Questions}) => {
  return (
    <div className="">
      <Navbar AuthUser={AuthUser}/>
      <div className="leadboardSummary">
        <SummaryTable allUsers={allUsers}/>
      </div>
    </div>
  );
};

export default HOC(Leaderboard);
