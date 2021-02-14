import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { currentWeatherReducer } from "./reducers/CurrentWeatherReducer";
import { currentFiveDaysReducer } from "./reducers/CurrentFiveDaysReducer";
import { favoriteCitiesReducer } from "./reducers/FavoriteCitiesReducer";
import { backgroundImageReducer } from "./reducers/BackgroundImageReducer";
import { errorReducer } from "./reducers/errorReducer";
import { fiveDays } from "./data";
import { ifCelsiusReducer } from "./reducers/IfCelsiusReducer";

const reducer = combineReducers({
  currentWeather: currentWeatherReducer,
  currentFiveDays: currentFiveDaysReducer,
  favoriteCities: favoriteCitiesReducer,
  error: errorReducer,
  backgroundImage: backgroundImageReducer,
  ifCelsius: ifCelsiusReducer,
});

const favCitiesFromLS = localStorage.getItem("fav")
  ? JSON.parse(localStorage.getItem("fav"))
  : [];

const initialState = {
  ifCelsius: true,
  currentFiveDays: fiveDays,
  favoriteCities: favCitiesFromLS,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
