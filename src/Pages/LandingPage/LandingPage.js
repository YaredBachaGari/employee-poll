import React from "react";
import Login from "../../Components/Login/login";
import "./LandingPage.css";
import HOC from "../../Components/HigherOrderComp/HOC";

const LandingPage = ({ allUsers, AuthUser }) => {
  return (
    <div>
      <div className="landing-img">
        <h1>Employee Polls</h1>
        <img
          src="https://www.zohowebstatic.com/sites/zweb/images/survey/freeonlinesurvey.png"
          alt="pollimage"
          width="400px"
          height="400px"
        />
      </div>
      <div className="login-form">
        <Login UserData={allUsers} Auth={AuthUser} />
      </div>
    </div>
  );
};

export default HOC(LandingPage);
