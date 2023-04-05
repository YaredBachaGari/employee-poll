import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "../src/Redux-handler/Store/Store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

export const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
