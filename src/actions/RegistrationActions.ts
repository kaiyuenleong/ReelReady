import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import { API_URL, API_URL_DEV, CLOUDINARY_URL } from "../services/API";
import { Registration } from "./interfaces";
import {
  NEW_NAME_CHANGED,
  NEW_EMAIL_CHANGED,
  NEW_PASSWORD_CHANGED,
  NEW_CONFIRM_PASSWORD_CHANGED,
  NEW_PROFILE_IMAGE_SELECTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER,
  REGISTER_CANCEL,
  VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAIL,
  CLEAR_REGISTRATION_ERROR
} from "./types";

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

const newProfileImageSelected = (imageURI: string) => {
  return {
    type: NEW_PROFILE_IMAGE_SELECTED,
    payload: imageURI
  }
}

const registerUser = ({ name, email, password, confirmPassword, image }: Registration) => {
  return async (dispatch: any) => {
    dispatch({ type: REGISTER_USER });

    if (password !== confirmPassword) {
      dispatch({ type: REGISTER_USER_FAIL, payload: "The provided passwords do not match."});
      setTimeout(() => {
        dispatch({ type: CLEAR_REGISTRATION_ERROR });
      }, 3000);
    } else {
      let data = {
        "file": image,
        "upload_preset": "reelready-profile"
      }
      let imageURL = await cloudinaryUpload(data);
      axios.post(`${API_URL_DEV}/signup`, {
        name,
        email,
        password,
        imageURL
      }).then((res) => {
        deviceStorage.saveItem("token_id", res.data.authToken);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: "set user" });
      }).catch((err) => {
        dispatch({ type: REGISTER_USER_FAIL, payload: err.response.data.error });
        setTimeout(() => {
          dispatch({ type: CLEAR_REGISTRATION_ERROR });
        }, 3000);
      })
    }
  }
}

const verifyUser = (verToken: string) => {
  return (dispatch: any) => {
    dispatch({ type: VERIFY_USER });
    axios.post(`${API_URL_DEV}/confirmation`, {
      verToken
    }).then((res) => {
      dispatch({ type: VERIFY_USER_SUCCESS, payload: res.data.msg });
    }).catch((err) => {
      dispatch({ type: VERIFY_USER_FAIL, payload: err.response.data.error });
    });
  }
}

const cancelRegistration = () => {
  return {
    type: REGISTER_CANCEL,
    payload: ""
  }
}

const cloudinaryUpload = (data: any) => {
  let imageURL = "";
  return new Promise(function(resolve, reject) {
    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: "POST"
    }).then(
      (res) => res.json()
    ).then(data => {
      imageURL = data.secure_url;
      resolve(imageURL);
    }).catch((error) => {
      reject(error);
    });
  })
} 

export {
  newNameChanged,
  newEmailChanged,
  newPasswordChanged,
  newConfirmPasswordChanged,
  newProfileImageSelected,

  registerUser,
  cancelRegistration,
  
  verifyUser
}