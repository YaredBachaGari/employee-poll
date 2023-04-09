import {
  questions_request,
  questions_failed,
  questions_success,
  QuestionPost_request,
  QuestionPost_Success,
  QuestionPost_Failed,
} from "../Actions/Questions";
import { logout_user } from "../Actions/AuthUser";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case questions_request:
      return {
        ...state,
        loading: true,
      };
    case questions_success:
      return {
        ...state,
        loading: false,
        data: action.questions,
      };
    case questions_failed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case QuestionPost_request:
      return {
        ...state,
        loading: true,
      };
    case QuestionPost_Success:
      return {
        ...state,
        loading: false,
        data: { ...state.data, [action.NewQuestion["id"]]: action.NewQuestion },
      };
    case QuestionPost_Failed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case logout_user:
      return initialState;

    default:
      return state;
  }
};

export default questionsReducer;
