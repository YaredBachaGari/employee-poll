import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleUserFetch } from "../../Redux-handler/Actions/Users";
import { handlequestionFetching } from "../../Redux-handler/Actions/Questions";

const HOC = (Component) => {
  const NewComponent = ({
    allUsers,
    AuthUser,
    fetchUsers,
    getQuestions,
    Questions,
  }) => {
    useEffect(() => {
      fetchUsers();
      getQuestions();
    }, [fetchUsers, getQuestions]);

    return (
      <Component
        allUsers={allUsers}
        AuthUser={AuthUser}
        Questions={Questions}
      />
    );
  };

  const mapStateToProps = (state) => {
    return {
      allUsers: state.Users,
      AuthUser: state.AuthUser,
      Questions: state.Questions,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers: () => dispatch(handleUserFetch()),
      getQuestions: () => dispatch(handlequestionFetching()),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(NewComponent);
};

export default HOC;
