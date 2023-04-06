import React, { useRef, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import PollCointainer from "../../Components/PollCointainer/PollCointainer";
import "./Home.css";
import HOC from "../../Components/HigherOrderComp/HOC.js";
import { filterData } from "../../utils/helper";

const Home = ({ allUsers, AuthUser, Questions }) => {
  const [isToggled, setIsToggled] = useState({ new: true, done: false });
  const filteredQ = filterData(Questions, AuthUser);
  const newQuestions = filteredQ?.new;
  const completed = filteredQ?.complete;
  const handleToggle = (buttonId) => {
    if (buttonId === "new") {
      setIsToggled({ new: true, done: false });
    }
    if (buttonId === "done") {
      setIsToggled({ new: false, done: true });
    }
  };
  return (
    <>
      {Questions.loading || allUsers.loading ? (
        <p className="loadingmsg">Loading...</p>
      ) : (
        <div>
          <Navbar AuthUser={AuthUser} />
          <div className="toggler">
            <button
              className={isToggled?.new && "defaultToggle"}
              onClick={() => handleToggle("new")}
            >
              New Questions
            </button>
            <button
              className={isToggled?.done && "defaultToggle"}
              onClick={() => handleToggle("done")}
            >
              Done
            </button>
          </div>

          {isToggled?.new && (
            <div className="poll-category">
              <PollCointainer
                category={"New Questions"}
                allUsers={allUsers}
                AuthUser={AuthUser}
                data={newQuestions}
              />
            </div>
          )}
          {isToggled?.done && (
            <div className="poll-category">
              <PollCointainer
                category={"Done"}
                allUsers={allUsers}
                AuthUser={AuthUser}
                data={completed}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HOC(Home);
