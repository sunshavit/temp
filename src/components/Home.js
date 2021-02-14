import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "./MyCard";
import Search from "./Search";
import { Box, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../actions/FavoriteCitiesAction";
import Background from "../components/Background";
import { getCurrentWeather } from "../actions/CurrentWeatherAction";
import axios from "axios";
import { SetErrorOn } from "../actions/ErrorAction";
import { getCurrentFiveDays } from "../actions/CurrentFiveDaysAction";
import { ACCUWEATHER_KEY, ACCUWEATHER_URL } from "../config";

const useStyles = makeStyles({
  myStyle: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: "25px",
    padding: "25px",
    backdropFilter: "blur(10px)",
  },
  searchStyle: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "25px",
    padding: "25px",
    margin: "40px",
  },
});

function Home() {
  const classes = useStyles();

  const ifCelsius = useSelector((state) => {
    return state.ifCelsius;
  });

  const currentWeather = useSelector((state) => {
    return state.currentWeather;
  });

  const currentFiveDays = useSelector((state) => {
    return state.currentFiveDays ? state.currentFiveDays.DailyForecasts : null;
  });

  const favoriteCities = useSelector((state) => {
    return state.favoriteCities;
  });

  const dispatch = useDispatch();
  const [favIcon, setFavIcon] = useState(false);

  useEffect(() => {
    geoFindMe();
  }, []);

  useEffect(() => {
    ifCheck();
  }, [currentWeather]);

  const favoriteOnClick = () => {
    if (!favIcon) {
      dispatch(addToFavorite(currentWeather.cityName, currentWeather.key));
    } else {
      dispatch(removeFromFavorite(currentWeather.cityName, currentWeather.key));
    }
    setFavIcon((prev) => !prev);
  };

  const ifCheck = () => {
    let find = false;
    if (currentWeather) {
      favoriteCities.map((favCity) => {
        if (favCity.key == currentWeather.key) {
          find = true;
        }
      });
      if (find) {
        setFavIcon(true);
      } else {
        setFavIcon(false);
      }
    }
  };

  function geoFindMe() {
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      try {
        const { data } = await axios.get(
          `${ACCUWEATHER_URL}/locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_KEY}&q=${latitude}%2C${longitude}`
        );
        dispatch(
          getCurrentWeather(
            data.Key,
            data.EnglishName + " " + data.Country.EnglishName
          )
        );
        dispatch(getCurrentFiveDays(data.Key));
      } catch (error) {
        dispatch(getCurrentWeather());
        dispatch(getCurrentFiveDays(328328));
      }
    }

    function error() {
      dispatch(getCurrentWeather());
    }

    if (!navigator.geolocation) {
      dispatch(getCurrentWeather());
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <>
      <Background />
      <Grid container justify="center">
        <Grid item xs={12} md={4}>
          <Search />
        </Grid>
        <Grid item xs={10} className={classes.myStyle}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Box
                id="main-container"
                display="flex"
                flexDirection="row"
                p={3}
                m={1}
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box p={1}>
                  <MyCard
                    day={-1}
                    temp={
                      currentWeather
                        ? ifCelsius
                          ? currentWeather.Temperature.Metric.Value
                          : Math.floor(
                              (currentWeather.Temperature.Metric.Value * 9) /
                                5 +
                                32
                            )
                        : 21
                    }
                    type={ifCelsius ? "C" : "F"}
                  />
                </Box>
                <Box p={1}>
                  <h1>{currentWeather && currentWeather.cityName}</h1>
                </Box>
                <Box p={1}>
                  <IconButton onClick={favoriteOnClick} aria-label="favorite">
                    <FavoriteIcon className={favIcon ? "favorites" : ""} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {currentFiveDays &&
                currentFiveDays.map((option, i) => (
                  <Grid item key={i} xs={12} sm={5} md={4} lg={2}>
                    <MyCard
                      maxtemp={
                        ifCelsius
                          ? option.Temperature.Maximum.Value
                          : Math.floor(
                              (option.Temperature.Maximum.Value * 9) / 5 + 32
                            )
                      }
                      mintemp={
                        ifCelsius
                          ? option.Temperature.Minimum.Value
                          : Math.floor(
                              (option.Temperature.Minimum.Value * 9) / 5 + 32
                            )
                      }
                      temp={
                        ifCelsius
                          ? option.Temperature.Minimum.Value
                          : (option.Temperature.Minimum.Value * 9) / 5 + 32
                      }
                      type={ifCelsius ? "C" : "F"}
                      day={i}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
