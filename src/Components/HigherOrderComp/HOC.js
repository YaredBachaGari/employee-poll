import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleUserFetch } from "../../Redux-handler/Actions/Users";
import { handlequestionFetching } from "../../Redux-handler/Actions/Questions";

const HOC = (Component) => {
  const NewComponent = () => {
    const allUsers = useSelector((state) => state.Users);
    const AuthUser = useSelector((state) => state.AuthUser);
    const Questions = useSelector((state) => state.Questions);
    const answer = useSelector((state) => state.Answers);
    const dispatch = useDispatch();
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
      if (
        !AuthUser.loggedInUser ||
        !allUsers ||
        Object.keys(allUsers.data).length === 0 ||
        !Questions ||
        Object.keys(Questions.data).length === 0
      ) {
        dispatch(handleUserFetch());
        dispatch(handlequestionFetching());
      }
    }, []);

    return (
      <Component
        allUsers={allUsers}
        AuthUser={AuthUser}
        Questions={Questions}
        answer={answer}
      />
    );
  };

  return NewComponent;
};

export default HOC;
