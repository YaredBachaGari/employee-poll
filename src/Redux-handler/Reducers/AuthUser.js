import {
  user_authentication_request,
  user_authentication_success,
  user_authentication_failed,
  logout_user,
} from "../Actions/AuthUser";

const initialState = { checking: false, loggedInUser: {}, error: "" };

const AuthUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case user_authentication_request:
      return {
        ...state,
        checking: true,
      };
    case user_authentication_success:
      return {
        ...state,
        checking: false,
        loggedInUser: action.user,
      };
    case user_authentication_failed:
      return {
        ...state,
        checking: false,
        error: "UnAuthorized User",
      };
    case logout_user:
      return initialState;
    default:
      return state;
  }
};

export default AuthUserReducer;
