import React from "react";
import { render, screen } from "@testing-library/react";
import PollCard from "../PollCard";
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

describe("PollCard Component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render username, date and show button", () => {
    const mockStore = configureStore();
    const store = mockStore({
      Questions: {
        data: {
          xyz: {
            id: "xyz",
            author: "john",
            timeStamp: 1467166872634,
            optionOne: {
              votes: ["alex", "sara"],
              text: "Build our new application with Javascript",
            },
            optionTow: {
              votes: ["brandon", "mattew"],
              text: "Build our new application with Asp.net",
            },
          },
        },
      },
    });
    const { card } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCard survey={store.Questions} category={"New Questions"} />
        </BrowserRouter>
      </Provider>
    );
    expect(card).toMatchSnapshot()
    expect(screen.getByText("Show")).toBeInTheDocument()
    expect(screen.getByTestId("author")).toBeInTheDocument()
    expect(screen.getByTestId("time")).toBeInTheDocument()
  });
});
