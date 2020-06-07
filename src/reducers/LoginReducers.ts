import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CLEAR_LOGIN_ERROR
} from "../actions/types";

const LOGIN_STATE = {
  email: "",
  password: "",
  error: "",
  loading: false,
  isAuthenticated: false
};

export default (state = LOGIN_STATE, action: any) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: "" };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: "" }
    case LOGIN_USER_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case CLEAR_LOGIN_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
}