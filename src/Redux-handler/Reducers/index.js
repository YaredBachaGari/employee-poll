import { combineReducers } from "redux";
import UsersReducer from "./Users";
import AuthUserReducer from "./AuthUser";
import questionsReducer from "./Questions"
import answerReducer from "./Answer"

const rootReducer = combineReducers({
  Users: UsersReducer,
  AuthUser: AuthUserReducer,
  Questions:questionsReducer,
  Answers:answerReducer
});
export default rootReducer;
