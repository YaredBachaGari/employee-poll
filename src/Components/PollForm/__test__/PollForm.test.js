import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PollForm from "../PollForm";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("../../../Redux-handler/Actions/Users");
jest.mock("../../../Redux-handler/Actions/Questions");

describe("PollForm Component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should render the form", () => {
    const mockStore = configureStore();
    const store = mockStore({
      AuthUser: {
        loggedInUser: { id: 1, username: "john" },
      },
    });
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
  it("on submit of the poll success msg should display", async () => {
    const mockStore = configureStore();
    const store = mockStore({
      AuthUser: {
        loggedInUser: { id: 1, username: "john" },
      },
    });
    const { Form } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollForm />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.input(screen.getByTestId("optionOne"), {
      target: { value: "learn java" },
    });
    fireEvent.input(screen.getByTestId("optionOne"), {
      target: { value: "learn c#" },
    });
    fireEvent.click(screen.getByTestId("createPoll"));
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 4000)), {
      timeout: 5000,
    });
    await expect(
      screen.queryByText(/you have successfully created a poll!!/i)
    ).not.toBeInTheDocument();
  });
});
