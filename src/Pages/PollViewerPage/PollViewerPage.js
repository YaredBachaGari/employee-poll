import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollViewer from "../../Components/PollViewer/PollViewer";
import "./PollViewerPage.css";

const PollViewerPage = () => {
  return (
    <>
      <Navbar />
      <div className="poll-option-section">
        <PollViewer />
      </div>
    </>
  );
};

export default PollViewerPage;
