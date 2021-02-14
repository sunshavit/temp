import axios from "axios";
import {
  ACCUWEATHER_KEY,
  ACCUWEATHER_URL,
  SET_CURRENT_WEATHER,
} from "../config";
import { SetErrorOn } from "./ErrorAction";

export const getCurrentWeather = (
  key = 328328,
  cityName = "London UK"
) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${ACCUWEATHER_URL}/currentconditions/v1/${key}?apikey=${ACCUWEATHER_KEY}`
    );
    const item = data[0];
    dispatch({
      type: SET_CURRENT_WEATHER,
      payload: { ...item, cityName, key },
    });
  } catch (error) {
    dispatch(SetErrorOn("Something Wrong Please Try Again"));
  }
};
