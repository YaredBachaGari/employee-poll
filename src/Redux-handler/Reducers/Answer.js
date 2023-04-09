import {
  saveAnswer_Request,
  saveAnswer_success,
  saveAnswer_Failed,
} from "../Actions/Answer";
import { logout_user } from "../Actions/AuthUser";

const initialState = {
  loading: false,
  vote: false,
  id: "",
  option: "",
  error: "",
};
const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case saveAnswer_Request:
      return {
        ...state,
        loading: true,
        vote: false,
        id: "",
        option: "",
      };
    case saveAnswer_success:
      return {
        ...state,
        vote: action.answer,
        id: action.id,
        option: action.option,
        loading: false,
        error: "",
      };
    case saveAnswer_Failed:
      return {
        ...state,
        vote: "",
        id: "",
        otion: "",
        loading: false,
        error: action.error,
      };
    case logout_user:
      return initialState;
    default:
      return state;
  }
};

export default answerReducer;
