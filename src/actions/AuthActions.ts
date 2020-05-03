import firebase from "firebase";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";

const emailChanged = (text: string) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

const passwordChanged = (text: string) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
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

export {
  emailChanged, 
  passwordChanged,
  loginUser,
  loginUserFail,
  loginUserSuccess
}