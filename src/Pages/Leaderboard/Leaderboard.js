import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./Leaderboard.css";
import SummaryTable from "../../Components/SummaryTable/SummaryTable";

const Leaderboard = () => {
  return (
    <div className="">
      <Navbar />
      <div className="leadboardSummary">
        <SummaryTable />
      </div>
    </div>
  );
};

export default Leaderboard;
