import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollForm from "../../Components/PollForm/PollForm";
import HOC from "../../Components/HigherOrderComp/HOC";
const NewPollPage = ({ AuthUser }) => {
  return (
    <div>
      <Navbar AuthUser={AuthUser} />
      <PollForm />
    </div>
  );
};

export default HOC(NewPollPage);
