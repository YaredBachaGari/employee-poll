import {
  questions_request,
  questions_failed,
  questions_success,
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

    default:
      return state;
  }
};

export default questionsReduer;
