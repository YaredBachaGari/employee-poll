import { _saveQuestionAnswer,users, questions } from "../../_DATA";

const mockData = {
  authedUser: "sarahedo",
  qid: "8xf0y6ziyjabvozdd253nd",
  answer: "optionOne",
};

describe("Save questions Answer", () => {
    it('should return true on successful save', async () => {
        const result = await _saveQuestionAnswer(mockData);
        expect(result).toBe(true);
        expect(users[mockData?.authedUser].answers[mockData?.qid]).toBe(mockData?.answer);
        expect(questions[mockData.qid][mockData.answer].votes).toContain(mockData.authedUser);
      })

  it("should reject with an error message if required data is not provided", async () => {
    const invalidData = {
      authedUser: null,
      qid: "",
      answer: "",
    };
    await expect(_saveQuestionAnswer(invalidData)).rejects.toMatch(
      "Please provide authedUser, qid, and answer"
    );
  });
});
