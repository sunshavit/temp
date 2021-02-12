export const addToFavorite = (cityName, key) => async (dispatch, getState) => {
  dispatch({
    type: "SET_FAVORITE_CITIES",
    payload: { cityName, key },
  });
};

export const removeFromFavorite = (cityName, key) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: "REMOVE_FAVORITE",
    payload: { cityName, key },
  });
};

export const getFromLocalSroge = (cities) => async (dispatch, getState) => {
  dispatch({
    type: "GET_FROM_LOCALSTORGE",
    payload: cities,
  });
};
