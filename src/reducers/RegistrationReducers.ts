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
} from '../actions/types';

const REGISTRATION_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false,
  image: ''
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
      // What to do here?
      return { ...state, ...REGISTRATION_STATE, user: action.payload };
    case REGISTER_USER_FAIL:
      return { ...state, error: action.payload, password: "", confirmPassword: "", loading: false };
    case REGISTER_CANCEL:
      return { ...REGISTRATION_STATE };
    default:
      return state;
  }
};