import React, { useState } from "react";
import "./PollForm.css";
import { handleQuestionPost } from "../../Redux-handler/Actions/Questions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PollForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.AuthUser);
  const [optionsText, seOptionsText] = useState({
    optionOne: "",
    optionTwo: "",
    sucess: false,
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    seOptionsText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const optionOneText = optionsText.optionOne;
    const optionTwoText = optionsText.optionTwo;
    const author = loggedInUser.username;
    const data = {
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: author,
    };
    dispatch(handleQuestionPost(data));
    seOptionsText({
      optionOne: "",
      optionTwo: "",
      sucess: true,
    });
    navigate("/home");
  };
  return (
    <div className="pollform-container">
      {optionsText.sucess && (
        <p className="successMsg" data-testid="successmg">
          you have successfully created a poll!!
        </p>
      )}
      <div>
        <p className="formheading">Would You Rather</p>
        <p className="suggestion">Create Your Own Poll</p>
      </div>

      <div className="pollform-input-container">
        <label htmlFor="firstoption">First Option</label>
        <input
          id="firstoption"
          name="optionOne"
          data-testid="optionOne"
          value={optionsText.optionOne}
          placeholder="Option one"
          onChange={onChangeHandler}
        />
      </div>
      <div className="pollform-input-container">
        <label htmlFor="secondoption">Second Option</label>
        <input
          id="secondoption"
          name="optionTwo"
          data-testid="optionTwo"
          value={optionsText.optionTwo}
          placeholder="Option two"
          onChange={onChangeHandler}
        />
      </div>
      <div className="pollform-btn">
        <button
          className="btn"
          onClick={onSubmit}
          data-testid="createPoll"
          disabled={
            optionsText.optionOne && optionsText.optionTwo ? false : true
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PollForm;
