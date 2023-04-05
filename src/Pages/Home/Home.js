import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollCointainer from "../../Components/PollCointainer/PollCointainer";
import "./Home.css";
import HOC from "../../Components/HigherOrderComp/HOC.js";
import { filterData } from "../../utils/helper";

const Home = ({ allUsers, AuthUser, Questions }) => {
  const filteredQ = filterData(Questions, AuthUser);
  const newQuestions = filteredQ.new;
  const completed = filteredQ.complete;
  return (
    <>
      {Questions.loading || allUsers.loading ? (
        <p className="loadingmsg">Loading...</p>
      ) : (
        <div>
          <Navbar AuthUser={AuthUser} />
          <div className="poll-category">
            <PollCointainer
              category={"New Questions"}
              allUsers={allUsers}
              AuthUser={AuthUser}
              data={newQuestions}
            />
          </div>
          <div className="poll-category">
            <PollCointainer
              category={"Done"}
              allUsers={allUsers}
              AuthUser={AuthUser}
              data={completed}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HOC(Home);
