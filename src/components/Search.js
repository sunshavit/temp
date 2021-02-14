import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { getCurrentWeather } from "../actions/CurrentWeatherAction";
import { getCurrentFiveDays } from "../actions/CurrentFiveDaysAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getBackgroundImage } from "../actions/BackgroundImageAction";
import { SetErrorOn } from "../actions/ErrorAction";
import { ACCUWEATHER_KEY, ACCUWEATHER_URL } from "../config";

function Search() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [citiesList, setCitiesList] = useState([]);

  const autoCompelet = async (searchTerm) => {
    try {
      const { data } = await axios.get(
        `${ACCUWEATHER_URL}/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_KEY}&q=${searchTerm}`
      );
      setCitiesList(data);
    } catch (error) {
      dispatch(SetErrorOn("Something Wrong Please Try Again"));
    }
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const timer = setTimeout(() => {
        autoCompelet(searchTerm);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e, value) => {
    if (value) {
      const [index, cityName] = value.split(".");
      if (cityName) {
        dispatch(getCurrentWeather(citiesList[index].Key, cityName));
        dispatch(getCurrentFiveDays(citiesList[index].Key));
        dispatch(getBackgroundImage(cityName));
      }
    }
  };

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={citiesList.map(
        (option, index) =>
          `${index}. ${option.LocalizedName} ${option.Country.LocalizedName}`
      )}
      onChange={handleSubmit}
      style={{
        margin: "15px",
      }}
      renderInput={(params) => (
        <TextField
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            margin: "0",
            borderRadius: "7px",
          }}
          {...params}
          placeholder="Search City"
          // label={searchTerm===""}"Search City"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
      )}
    />
  );
}

export default Search;
