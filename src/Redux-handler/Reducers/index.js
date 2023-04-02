import { combineReducers } from "redux";
import UsersReducer from "./Users";
import AuthUserReducer from "./AuthUser";
import questionsReduer from "./Questions"
import answerReducer from "./Answer"

const rootReducer = combineReducers({
  Users: UsersReducer,
  AuthUser: AuthUserReducer,
  Questions:questionsReduer,
  Answers:answerReducer
});
export default rootReducer;
