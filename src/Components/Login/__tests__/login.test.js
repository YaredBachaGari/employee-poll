import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../login.js";
import { BrowserRouter } from "react-router-dom";
import store from "../../../Redux-handler/Store/Store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("should render avatar", () => {
  it("the snapshoots must match the login form and all fields should exist", () => {
    const { login } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const userName = screen.getByTestId("username");
    const passcode = screen.getByTestId("password");
    expect(login).toMatchSnapshot();
    expect(userName).toBeInTheDocument();
    expect(passcode).toBeInTheDocument();
  });
});
