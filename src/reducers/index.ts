import { combineReducers } from "redux";
import LoginReducers from "./LoginReducers";
import RegistrationReducers from "./RegistrationReducers";
import HomeReducers from "./HomeReducers";

export default combineReducers({
  login: LoginReducers,
  registration: RegistrationReducers,
  home: HomeReducers
});
