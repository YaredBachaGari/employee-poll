import React from "react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import configureStore from "redux-mock-store";
//import { logout } from "../../store/actions/AuthUser";
import store from "../../../Redux-handler/Store/Store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../../Pages/Home/Home";

describe("Navbar component", () => {
  it("it should match the snapshots without any prop", () => {
    const { navigation } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(navigation).toMatchSnapshot();
  });
  it("it should match the snapshots with prop being passed", () => {
    const mockStore = configureStore();
    const store = mockStore({
      AuthUser: {
        loggedInUser: { id: 1, username: "john" },
      },
    });
    const { navigation } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(navigation).toMatchSnapshot();
  });
  it("should render all menu links", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar AuthUser={store.AuthUser} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByTestId("leaderBoard")).toBeInTheDocument();
    expect(screen.getByTestId("newpoll")).toBeInTheDocument();
    expect(screen.getByTestId("logout")).toBeInTheDocument();
  });
});
describe("Navbar component2", () => {
  it("Avatar and user name should render on navbar", () => {
    const mockStore = configureStore();
    const store = mockStore({
      AuthUser: {
        loggedInUser: { id: 1, username: "john" },
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar AuthUser={store.AuthUser} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});
