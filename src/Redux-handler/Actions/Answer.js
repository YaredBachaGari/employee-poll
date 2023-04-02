import { _saveQuestionAnswer } from "../../_DATA";
export const saveAnswer_Request = "saveAnswer_Request";
export const saveAnswer_success = "saveAnswer_success";
export const saveAnswer_Failed = "saveAnswer_success";

export const saveAnswerToQuestionReq = () => {
  return {
    type: saveAnswer_Request,
  };
};
export const saveAnswerToQuestionSuccess = (answer) => {
  return {
    type: saveAnswer_success,
    answer,
  };
};
export const saveAnswerToQuestionFailed = (error) => {
  return {
    type: saveAnswer_Failed,
    error,
  };
};

export const handlePostingAnswer = (data) => {
  return async (dispatch) => {
    dispatch(saveAnswerToQuestionReq());
    try {
          const resp = await _saveQuestionAnswer(data);
          dispatch(saveAnswerToQuestionSuccess(resp));
      } catch (error) {
          dispatch(saveAnswerToQuestionFailed(error.message));
      }
  };
};
