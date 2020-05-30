import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import { API_URL } from "../services/API";
import {
  NEW_NAME_CHANGED,
  NEW_EMAIL_CHANGED,
  NEW_PASSWORD_CHANGED,
  NEW_CONFIRM_PASSWORD_CHANGED,
  NEW_PROFILE_IMAGE_SELECTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER,
  REGISTER_CANCEL
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
    payload: password
  }
}

const newConfirmPasswordChanged = (password: string) => {
  return {
    type: NEW_CONFIRM_PASSWORD_CHANGED,
    payload: password
  }
}

const newProfileImageSelected = (uri: string) => {
  return {
    type: NEW_PROFILE_IMAGE_SELECTED,
    payload: uri
  }
}

const registerUser = ({ name, email, password, confirmPassword }: Registration) => {
  return (dispatch: any) => {
    dispatch({ type: REGISTER_USER });

    if (password !== confirmPassword) {
      dispatch({ type: REGISTER_USER_FAIL, payload: "The provided passwords do not match."});
    } else {
      console.log("posting to axios");
      axios.post(`${API_URL}/signup`, {
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

const cancelRegistration = () => {
  return {
    type: REGISTER_CANCEL,
    payload: ""
  }
}

export {
  newNameChanged,
  newEmailChanged,
  newPasswordChanged,
  newConfirmPasswordChanged,
  newProfileImageSelected,
  registerUser,
  cancelRegistration
}