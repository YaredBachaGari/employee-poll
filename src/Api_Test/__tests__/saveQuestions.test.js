import { _saveQuestion } from "../../_DATA";

const mockData = {
  optionOneText: "give",
  optionTwoText: "take",
  author: "sara",
};

describe("Save questions function ", () => {
    it('should return a new question object on successful save', async () => {
    const result = await _saveQuestion(mockData);
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.timestamp).toBeDefined();
    expect(result.author).toBe(mockData.author);
    expect(result.optionOne.text).toBe(mockData.optionOneText);
    expect(result.optionTwo.text).toBe(mockData.optionTwoText);
  });

  it('should reject with an error message if required data is not provided', async () => {
    const invalidData = { optionOneText: 'hello', optionTwoText: 'world' };
    await expect(_saveQuestion(invalidData)).rejects.toMatch("Please provide optionOneText, optionTwoText, and author");
  });
});
