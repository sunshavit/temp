import axios from "axios";

export const getCurrentFiveDays = (key) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU`
    );
    dispatch({
      type: "SET_CURRENT_FIVE_DAYS",
      payload: data,
    });

    // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log("error");
  }
};
