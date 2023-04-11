import {
  Fetch_user_request,
  Fetch_user_success,
  Fetch_user_failed,
} from "../Actions/Users";
import {
  QuestionPost_request,
  QuestionPost_Success,
  QuestionPost_Failed,
} from "../Actions/Questions";
import { saveAnswer_success } from "../Actions/Answer";
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
    case QuestionPost_request:
      return {
        ...state,
        loading: true,
      };
    case QuestionPost_Success:
      const { NewQuestion } = action;
      const { author, id } = NewQuestion;
      const updatedAuthor = {
        ...state.data[author],
        questions: state.data[author].questions
          ? [...state.data[author].questions, id]
          : [id],
      };
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [author]: updatedAuthor,
        },
        error: "",
      };
    case QuestionPost_Failed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case saveAnswer_success:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,

          [action.authedUser]: {
            ...state.data[action.authedUser],
            answers: {
              ...state.data[action.authedUser].answers,
              [action.id]: action.option,
            },
          },
        },
        error: "",
      };
    case logout_user:
      return {
        ...state,
        loading: false,
        data: {},
        error: "",
      };
    default:
      return state;
  }
};

export default UsersReducer;
