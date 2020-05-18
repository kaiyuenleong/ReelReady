import { combineReducers } from "redux";
import LoginReducers from "./LoginReducers";
import RegistrationReducers from "./RegistrationReducers";

export default combineReducers({
  login: LoginReducers,
  registration: RegistrationReducers
});
