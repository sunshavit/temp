import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { currentWeatherReducer } from "./reducers/CurrentWeatherReducer";
import { currentFiveDaysReducer } from "./reducers/CurrentFiveDaysReducer";
import { favoriteCitiesReducer } from "./reducers/FavoriteCitiesReducer";

const reducer = combineReducers({
  currentWeather: currentWeatherReducer,
  currentFiveDays: currentFiveDaysReducer,
  favoriteCities: favoriteCitiesReducer,
});

const initialState = {
  currentFiveDays: [],
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
