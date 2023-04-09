import { _saveQuestionAnswer } from "../../_DATA";
export const saveAnswer_Request = "saveAnswer_Request";
export const saveAnswer_success = "saveAnswer_success";
export const saveAnswer_Failed = "saveAnswer_success";

export const saveAnswerToQuestionReq = () => {
  return {
    type: saveAnswer_Request,
  };
};
export const saveAnswerToQuestionSuccess = (answer, id, option) => {
  return {
    type: saveAnswer_success,
    answer: answer,
    id: id,
    option: option,
  };
};
export const saveAnswerToQuestionFailed = (error) => {
  return {
    type: saveAnswer_Failed,
    error,
  };
};

export const handlePostingAnswer = (data, id, option) => {
  return async (dispatch) => {
    dispatch(saveAnswerToQuestionReq());
    try {
      const resp = await _saveQuestionAnswer(data);
      dispatch(saveAnswerToQuestionSuccess(resp, id, option));
    } catch (error) {
      dispatch(saveAnswerToQuestionFailed(error.message));
    }
  };
};
