import {
  saveAnswer_Request,
  saveAnswer_success,
  saveAnswer_Failed,
} from "../Actions/Answer";

const initialState = {
  loading: false,
  vote: {},
  error: "",
};
const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case saveAnswer_Request:
      return {
        ...state,
        loading: true,
      };
    case saveAnswer_success:
      return {
        ...state,
        vote: action.answer,
        loading: false,
        error: "",
      };
    case saveAnswer_Failed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default answerReducer;
