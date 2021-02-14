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
  const ifCelsius = useSelector((state) => {
    return state.ifCelsius;
  });

  const favCities = useSelector((state) => {
    return state.favoriteCities;
  });

  const [favCitiesWithTemp, setFavCitiesWithTemp] = useState([]);

  const getTemp = async (cities) => {
    const promisesArray = cities.map((city) => {
      try {
        return axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${city.key}?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU`
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
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        xs={10}
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          borderRadius: "25px",
          padding: "40px",
          margin: "40px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Grid container spacing={2}>
          {console.log(favCitiesWithTemp)}
          {favCitiesWithTemp.map((city, i) => (
            <Grid item key={i} xs={8} md={3} lg={3}>
              <MyCard
                temp={
                  ifCelsius
                    ? city.Temperature.Metric.Value
                    : Math.floor((city.Temperature.Metric.Value * 9) / 5 + 32)
                }
                cityname={city.cityName}
                type={ifCelsius ? "C" : "F"}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Favorite;
