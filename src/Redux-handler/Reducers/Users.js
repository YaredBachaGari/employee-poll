import {
  Fetch_user_request,
  Fetch_user_success,
  Fetch_user_failed,
} from "../Actions/Users";
import { logout_user } from "../Actions/AuthUser";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_user_request:
      return {
        ...state,
        loading: true,
      };
    case Fetch_user_success:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case Fetch_user_failed:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case logout_user:
      return initialState;
    default:
      return state;
  }
};

export default UsersReducer;
