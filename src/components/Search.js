import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { cities } from "../data";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { getCurrentWeather } from "../actions/CurrentWeatherAction";
import { getCurrentFiveDays } from "../actions/CurrentFiveDaysAction";
import { useDispatch } from "react-redux";
import axios from "axios";

function Search() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [citiesList, setCitiesList] = useState([]);

  const autoCompelet = async (searchTerm) => {
    try {
      const { data } = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU&q=${searchTerm}`
      );
      setCitiesList(data);
    } catch (error) {
      console.log("error");
    }
  };

  // const autoCompelet = async (searchTerm) => {
  //   try {
  //     const res = await fetch(
  //       `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU&q=${searchTerm}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (res.status === 200) {
  //       console.log("sun");
  //       const data = await res.json();
  //       setCitiesList(data);
  //     } else {
  //       throw new Error(res.error);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (searchTerm.trim()) {
      const timer = setTimeout(() => {
        //autoCompelet(searchTerm);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const changeCity = async (index, cityName) => {
    dispatch(getCurrentWeather(cities[index].Key, cityName));
    dispatch(getCurrentFiveDays(cities[index].Key));
  };

  const handleSubmit = (e) => {
    changeCity(e.target.getAttribute("data-option-index"), e.target.innerHTML);
  };

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={citiesList.map(
        // options={cities.map(
        (option) => `${option.LocalizedName} ${option.Country.LocalizedName}`
      )}
      onChange={handleSubmit}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search City"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
      )}
    />
  );
}

export default Search;
