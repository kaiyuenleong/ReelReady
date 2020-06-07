import axios from "axios";
import { API_URL } from "../services/API";
import deviceStorage from "../services/deviceStorage";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CLEAR_LOGIN_ERROR
} from "./types";

interface Login {
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

const loginUser = ({ email, password }: Login) => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_USER });

    axios.post(`http://192.168.0.5:3000/login`, {
      email,
      password
    }).then((res) => {
      deviceStorage.saveItem("token_id", res.data.authToken);
      dispatch({ type: LOGIN_USER_SUCCESS });
    }).catch((error) => {
      dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.error });
      setTimeout(() => {
        dispatch({ type: CLEAR_LOGIN_ERROR });
      }, 3000);
    })
  }
}

const loginUserFail = () => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_USER_FAIL });
  }
}

const loginUserSuccess = () => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_USER_SUCCESS });
  }
}

export {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail,
  loginUserSuccess
}