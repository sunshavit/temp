import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import MyCard from "./MyCard";
import TextField from "@material-ui/core/TextField";
import Search from "./Search";
import { Box, IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Sunny } from "../Icons";
import { londonWeather } from "../data";
import { fiveDays } from "../data";
import { useSelector } from "react-redux";
import axios from "axios";

const Favorite = (props) => {
  const favCities = useSelector((state) => {
    return state.favoriteCities;
  });

  const [favCitiesWithTemp, setFavCitiesWithTemp] = useState([]);

  const getTemp = async (cities) => {
    const promisesArray = cities.map((city) => {
      try {
        return axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${city.key}?apikey=PGXiTxwk7bq7pWCUuL0EtwDboQLUCI9M`
        );
      } catch (error) {
        console.log(error);
      }
    });
    const results = await Promise.allSettled(promisesArray);
    const citiesTemp = results.map((city, index) => {
      console.log(city);
      const [cityData] = city.value.data;
      return { ...cityData, cityName: cities[index].cityName };
    });
    setFavCitiesWithTemp(citiesTemp);
  };

  useEffect(() => {
    getTemp(favCities);
  }, []);

  return (
    <Grid>
      {console.log(favCitiesWithTemp)}
      <Grid item xs={12}>
        {favCitiesWithTemp.map((city, i) => (
          <Grid item xs={3} key={i}>
            <MyCard
              temp={city.Temperature.Metric.Value}
              cityname={city.cityName}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Favorite;
