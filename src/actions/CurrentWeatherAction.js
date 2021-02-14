import axios from "axios";
import { SetErrorOn } from "./ErrorAction";

export const getCurrentWeather = (
  key = 328328,
  cityName = "London UK"
) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU`
    );
    const item = data[0];
    console.log(key);
    dispatch({
      type: "SET_CURRENT_WEATHER",
      payload: { ...item, cityName, key },
    });
  } catch (error) {
    dispatch(SetErrorOn("Something Wrong Please Try Again"));
  }
};
