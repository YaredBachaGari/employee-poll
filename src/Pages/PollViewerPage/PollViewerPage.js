import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollViewer from "../../Components/PollViewer/PollViewer";
import "./PollViewerPage.css";
import HOC from "../../Components/HigherOrderComp/HOC";

const PollViewerPage = ({ Questions, allUsers, AuthUser }) => {
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
