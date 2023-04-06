import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";
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

describe("NotFound Component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it("for non-loggedin users signin button should render and go back btn shoud hide", () => {
    const mockStore = configureStore();
    const store = mockStore({
      AuthUser: {
        loggedInUser: {},
      },
    });
    const { notFoundPage } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );
   const backbtn = screen.queryByTestId("gohome");
    const signIn = screen.getByTestId("signIn");
    expect(notFoundPage).toMatchSnapshot();
    expect(backbtn).not.toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
  });
  it("for loggedin users signin button should hide and go back btn shoud render", () => {
    const mockStore = configureStore();
    const store = mockStore({
      AuthUser: {
        loggedInUser: {id:1, username:"john"},
      },
    });
    const { notFoundPage } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound AuthUser={store.AuthUser} />
        </BrowserRouter>
      </Provider>
    );
   const backbtn = screen.getByTestId("gohome");
    const signIn = screen.queryByTestId("signIn");
    expect(notFoundPage).toMatchSnapshot();
    expect(backbtn).toBeInTheDocument();
    expect(signIn).not.toBeInTheDocument();
  });
});
