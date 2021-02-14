import { SET_TO_CELSIUS } from "../config";
import { ifCelsiusReducer } from "../reducers/IfCelsiusReducer";

export const setCelsius = (ifCelsius) => (dispatch, getState) => {
  dispatch({
    type: SET_TO_CELSIUS,
    paylode: ifCelsius,
  });
};
