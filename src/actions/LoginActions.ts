import axios from "axios";
import { API_URL } from "../services/API";
import deviceStorage from "../services/deviceStorage";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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

    if (!email || !password) {
      dispatch({ type: LOGIN_USER_FAIL, payload: "Invalid email or password."});
    }

    axios.post(`http://192.168.0.5:3000/login`, {
      email,
      password
    }).then((res) => {
      deviceStorage.saveItem("token_id", res.data.authToken);
      const user = {
        name: res.data.name,
        email: res.data.email,
        id: res.data.id
      }
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    }).catch((error) => {
      dispatch({ type: LOGIN_USER_FAIL, payload: error });
    })
  }
}

const loginUserFail = () => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_USER_FAIL });
  }
}

const loginUserSuccess = (user: any) => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  }
}

export {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail,
  loginUserSuccess
}