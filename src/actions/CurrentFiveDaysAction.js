import axios from "axios";
import { SetErrorOn } from "./ErrorAction";

export const getCurrentFiveDays = (key) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU&metric=true`
    );
    dispatch({
      type: "SET_CURRENT_FIVE_DAYS",
      payload: data,
    });
  } catch (error) {
    dispatch(SetErrorOn("Something Wrong Please Try Again"));
  }
};
