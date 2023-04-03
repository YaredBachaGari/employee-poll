import { _getQuestions, _saveQuestion } from "../../_DATA";
export const questions_request = "questions_request";
export const questions_success = "questions_success";
export const questions_failed = "questions_failed";
export const QuestionPost_request = "QuestionPost_request";
export const QuestionPost_Success = "QuestionPost_Success";
export const QuestionPost_Failed = "QuestionPost_Failed";

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

export const QuestionPostRequest = () => {
  return {
    type: QuestionPost_request,
  };
};
export const QuestionPostSuccess = (NewQuestion) => {
  return {
    type: QuestionPost_Success,
    NewQuestion,
  };
};
export const QuestionPostFailed = (error) => {
  return {
    type: QuestionPost_Success,
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

export const handleQuestionPost = (data) => {
  return async (dispatch) => {
    dispatch(QuestionPostRequest());
    try {
      const resp = await _saveQuestion(data);
      dispatch(QuestionPostSuccess(resp));
    } catch (error) {
      dispatch(QuestionPostFailed(error.message));
    }
  };
};
