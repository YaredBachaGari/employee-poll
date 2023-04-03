import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";
import logger from "../MiddleWare/logger";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore(
  {
    reducer: rootReducer,
    middleware:[thunk, logger],
  },
  composeWithDevTools() // devtool
);

export default store;
