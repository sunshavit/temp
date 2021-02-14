import { SET_CURRENT_WEATHER } from "../config";

export const currentWeatherReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_WEATHER:
      return action.payload;

    default:
      return state;
  }
};
