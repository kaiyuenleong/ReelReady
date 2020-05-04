import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,

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
}

const emailChanged = (email: string) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
}

const passwordChanged = (password: string) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

const loginUser = ({ email, password }: any) => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_USER });

    // Call API to login user here
  }
}

const loginUserFail = (dispatch: any) => {
  dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSuccess = (dispatch: any, user: any) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
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

const registerUser = ({ name, email, password, confirmPassword }: any) => {
  return (dispatch: any) => {
    dispatch({ type: REGISTER_USER });

    if (password !== confirmPassword) {
      dispatch({ type: REGISTER_USER_FAIL, payload: "The provided passwords do not match."})
    } else {
      // Call API to register user here
      axios.post(`${process.env.API_URL}/signup`, {
        body: {
          name,
          email,
          password,
        }
      }).then((res) => {
        // Save JWT Response Here
        deviceStorage.saveItem("token_id", res.data.authToken);
      }).catch((error) => {
        dispatch({ type: REGISTER_USER_FAIL, payload: error });
      })
    }
  }
}

export {
  emailChanged, 
  passwordChanged,
  loginUser,
  loginUserFail,
  loginUserSuccess,

  newNameChanged,
  newEmailChanged,
  newPasswordChanged,
  newConfirmPasswordChanged,
  registerUser
}