import axios from "axios";
import {
  ACCUWEATHER_URL,
  ACCUWEATHER_KEY,
  SET_CURRENT_FIVE_DAYS,
} from "../config";
import { SetErrorOn } from "./ErrorAction";

export const getCurrentFiveDays = (key) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${ACCUWEATHER_URL}/forecasts/v1/daily/5day/${key}?apikey=${ACCUWEATHER_KEY}&metric=true`
    );
    dispatch({
      type: SET_CURRENT_FIVE_DAYS,
      payload: data,
    });
  } catch (error) {
    dispatch(SetErrorOn("Something Wrong Please Try Again"));
  }
};
