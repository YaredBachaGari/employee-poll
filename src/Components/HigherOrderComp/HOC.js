import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleUserFetch } from "../../Redux-handler/Actions/Users";
import { handlequestionFetching } from "../../Redux-handler/Actions/Questions";

const HOC = (Component) => {
  const NewComponent = () => {
    const allUsers = useSelector((state) => state.Users);
    const AuthUser = useSelector((state) => state.AuthUser);
    const Questions = useSelector((state) => state.Questions);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(handleUserFetch());
      dispatch(handlequestionFetching());
    }, [dispatch]);

    return (
      <Component
        allUsers={allUsers}
        AuthUser={AuthUser}
        Questions={Questions}
      />
    );
  };

  return NewComponent;
};

export default HOC;