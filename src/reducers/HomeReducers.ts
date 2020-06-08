import {
  HOME_MOUNTED
} from "../actions/types";

const HOME_STATE = {
  productions: [],
  username: ""
}

export default (state = HOME_STATE, action: any) => {
  switch (action.type) {
    case HOME_MOUNTED:
      return { productions: action.payload.productions, username: action.payload.name }
    default:
      return state;
  }
}