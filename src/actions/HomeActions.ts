import {
  HOME_MOUNTED
} from "./types";

const homeMounted = (data: any) => {
  return (dispatch: any) => {
    dispatch({ type: HOME_MOUNTED, payload: data });
  }
}

export {
  homeMounted
}