import axios from "axios";

export const getCurrentWeather = (
  key = 328328,
  cityName = "London UK"
) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=PGXiTxwk7bq7pWCUuL0EtwDboQLUCI9M`
    );
    const item = data[0];
    console.log(key);
    dispatch({
      type: "SET_CURRENT_WEATHER",
      payload: { ...item, cityName, key },
    });
  } catch (error) {
    console.log("error");
  }
};
