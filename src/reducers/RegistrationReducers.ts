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
  CLEAR_REGISTRATION_ERROR,
  VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAIL
} from '../actions/types';

const REGISTRATION_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false,
  image: '',
  isVisible: false
};

export default (state = REGISTRATION_STATE, action: any) => {
  switch (action.type) {
    case NEW_NAME_CHANGED:
      return { ...state, name: action.payload, error: "" };
    case NEW_EMAIL_CHANGED:
      return { ...state, email: action.payload, error: "" };
    case NEW_PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: "" };
    case NEW_CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload, error: "" };
    case NEW_PROFILE_IMAGE_SELECTED:
      return { ...state, image: action.payload, error: "" };
    case REGISTER_USER:
      return { ...state, loading: true, error: "" };
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, isVisible: true };
    case REGISTER_USER_FAIL:
      return { ...state, error: action.payload, password: "", confirmPassword: "", loading: false };
    case REGISTER_CANCEL:
      return { ...state };
    case CLEAR_REGISTRATION_ERROR:
      return { ...state, error: "" };
    case VERIFY_USER:
      return { ...state, loading: true, error: "" };
    case VERIFY_USER_SUCCESS:
      return { ...state, isVisible: false };
    case VERIFY_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};