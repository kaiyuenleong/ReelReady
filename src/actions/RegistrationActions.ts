import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import { API_URL } from "../services/API";
import {
  NEW_NAME_CHANGED,
  NEW_EMAIL_CHANGED,
  NEW_PASSWORD_CHANGED,
  NEW_CONFIRM_PASSWORD_CHANGED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER
} from "./types";

interface Registration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const newNameChanged = (name: string) => {
  return {
    type: NEW_NAME_CHANGED,
    payload: name
  }
}

const newEmailChanged = (email: string) => {
  return {
    type: NEW_EMAIL_CHANGED,
    payload: email
  }
}

const newPasswordChanged = (password: string) => {
  return {
    type: NEW_PASSWORD_CHANGED,
    payload: password,
  }
}

const newConfirmPasswordChanged = (password: string) => {
  return {
    type: NEW_CONFIRM_PASSWORD_CHANGED,
    payload: password
  }
}

const registerUser = ({ name, email, password, confirmPassword }: Registration) => {
  return (dispatch: any) => {
    dispatch({ type: REGISTER_USER });

    if (password !== confirmPassword) {
      dispatch({ type: REGISTER_USER_FAIL, payload: "The provided passwords do not match."});
    } else {
      // Call API to register user here
      console.log("posting to axios");
      axios.post("http://192.168.0.5:3000/" + "signup", {
        name,
        email,
        password
      }).then((res) => {
        deviceStorage.saveItem("token_id", res.data.authToken);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: "set user" });
      }).catch((error) => {
        console.log(error);
        dispatch({ type: REGISTER_USER_FAIL, payload: error });
      })
    }
  }
}

export {
  newNameChanged,
  newEmailChanged,
  newPasswordChanged,
  newConfirmPasswordChanged,
  registerUser
}