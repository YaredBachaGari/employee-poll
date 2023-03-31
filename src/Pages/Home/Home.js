import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollCointainer from "../../Components/PollCointainer/PollCointainer";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="poll-category">
        <PollCointainer category={"New Questions"} />
      </div>
      <div className="poll-category">
        <PollCointainer category={"Done"} />
      </div>
    </div>
  );
};

export default Home;
