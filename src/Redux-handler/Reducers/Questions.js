import {
  questions_request,
  questions_failed,
  questions_success,
  QuestionPost_request,
  QuestionPost_Success,
  QuestionPost_Failed,
} from "../Actions/Questions";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const questionsReduer = (state = initialState, action) => {
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
          data: {...state.data,
            [action.NewQuestion['id']]:action.NewQuestion},//this is replacing data entirely. so push instead of replacing
        };
      case QuestionPost_Failed:
        return {
          ...state,
          loading: false,
          error: action.error,
        };

    default:
      return state;
  }
};

export default questionsReduer;
