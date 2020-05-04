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
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case NEW_NAME_CHANGED:
      return { ...state, name: action.payload };
    case EMAIL_CHANGED || NEW_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED || NEW_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case NEW_CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Invalid email or password.", password: "", loading: false };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      // What to do here?
      break;
    case REGISTER_USER_FAIL:
      return { ...state, error: action.payload, password: "", loading: false }
    default:
      return state;
  }
};