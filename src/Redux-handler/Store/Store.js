import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";
import logger from "../MiddleWare/logger";


const store = configureStore(
  {
    reducer: rootReducer,
    middleware:[thunk, logger]
  },
);

export default store;
