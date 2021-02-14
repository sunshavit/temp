import axios from "axios";
import {
  ACCUWEATHER_KEY,
  ACCUWEATHER_URL,
  SET_CURRENT_WEATHER,
} from "../config";
import { SetErrorOn } from "./ErrorAction";

export const getCurrentWeather = (
  key = 215854,
  cityName = "Tel Aviv Israel"
) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${ACCUWEATHER_URL}/currentconditions/v1/${key}?apikey=${process.env.REACT_APP_API_WEATHER_KEY}`
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
