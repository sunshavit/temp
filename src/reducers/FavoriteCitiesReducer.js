import React from "react";

export const favoriteCitiesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE_CITIES":
      if (state.length !== 0) {
        const cities = state.filter((city) => city.key != action.payload.key);
        localStorage.setItem(
          "fav",
          JSON.stringify([...cities, action.payload])
        );
        return [...cities, action.payload];
      } else {
        localStorage.setItem("fav", JSON.stringify([action.payload]));
        return [action.payload];
      }
    case "REMOVE_FAVORITE":
      const cities = state.filter((city) => city.key != action.payload.key);
      localStorage.setItem("fav", cities);
      return cities;
    case "GET_FROM_LOCALSTORGE":
      return action.payload;
    default:
      return state;
  }
};
