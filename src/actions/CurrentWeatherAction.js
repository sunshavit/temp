import axios from "axios";

export const getCurrentWeather = (key, cityName = "") => async (
  dispatch,
  getState
) => {
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

    // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log("error");
  }
};
