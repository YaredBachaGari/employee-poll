import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PollForm from "../PollForm";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";

describe("PollForm Component", () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      AuthUser: {
        loggedInUser: { id: 1, username: "john" },
      },
    });
    store.dispatch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should render the form", () => {
    const { Form } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollForm />
        </BrowserRouter>
      </Provider>
    );
    expect(Form).toMatchSnapshot();
    expect(screen.getByTestId("createPoll")).toBeInTheDocument();
    expect(screen.getByTestId("optionOne")).toBeInTheDocument();
    expect(screen.getByTestId("optionTwo")).toBeInTheDocument();
  });
  it("displays success message after submitting form", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollForm />
        </BrowserRouter>
      </Provider>
    );

    const optionOneInput = screen.getByTestId("optionOne");
    const optionTwoInput = screen.getByTestId("optionTwo");
    const submitButton = screen.getByTestId("createPoll");

    fireEvent.change(optionOneInput, { target: { value: "Option one" } });
    fireEvent.change(optionTwoInput, { target: { value: "Option two" } });
    fireEvent.click(submitButton);

    const successMsg = await screen.findByTestId("successmg");

    expect(successMsg).toBeInTheDocument();
    expect(successMsg).toHaveTextContent(
      /you have successfully created a poll!!/i
    );
  });
});