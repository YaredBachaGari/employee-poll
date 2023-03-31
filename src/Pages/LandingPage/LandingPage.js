import React from "react";
import Login from "../../Components/login";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="landing-img">
        <img
          src="https://www.zohowebstatic.com/sites/zweb/images/survey/freeonlinesurvey.png"
          alt="pollimage"
          width="400px"
          height="400px"
        />
      </div>
      <div className="login-form">
        <Login />
      </div>
    </div>
  );
};

export default LandingPage;
