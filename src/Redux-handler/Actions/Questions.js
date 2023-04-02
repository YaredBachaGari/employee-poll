import { _getQuestions } from "../../_DATA";
export const questions_request = "questions_request";
export const questions_success = "questions_success";
export const questions_failed = "questions_failed";

export const questionsRequest = () => {
  return {
    type: questions_request,
  };
};
export const getQuestionsSuccess = (questions) => {
  return {
    type: questions_success,
    questions,
  };
};
export const getQuestionsFailed = (error) => {
  return {
    type: questions_failed,
    error,
  };
};

export const handlequestionFetching = () => {
  return async (dispatch) => {
    dispatch(questionsRequest());
    try {
      const resp = await _getQuestions();
      dispatch(getQuestionsSuccess(resp));
    } catch (error) {
      dispatch(getQuestionsFailed(error.message));
    }
  };
};


