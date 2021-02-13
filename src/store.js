import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { currentWeatherReducer } from "./reducers/CurrentWeatherReducer";
import { currentFiveDaysReducer } from "./reducers/CurrentFiveDaysReducer";
import { favoriteCitiesReducer } from "./reducers/FavoriteCitiesReducer";
import { errorReducer } from "./reducers/errorReducer";

const reducer = combineReducers({
  currentWeather: currentWeatherReducer,
  currentFiveDays: currentFiveDaysReducer,
  favoriteCities: favoriteCitiesReducer,
  error: errorReducer,
});

const favCitiesFromLS = localStorage.getItem("fav")
  ? JSON.parse(localStorage.getItem("fav"))
  : [];

const initialState = {
  // currentFiveDays: [],
  favoriteCities: favCitiesFromLS,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
