import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../actions/types";

const LOGIN_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = LOGIN_STATE, action: any) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...LOGIN_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: "", loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
}