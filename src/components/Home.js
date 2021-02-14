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
    // dispatch(getCurrentFiveDays(328328));
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
          console.log("object");
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
      console.log({ latitude, longitude });
      try {
        const { data } = await axios.get(
          `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=uaA6izrpcMjX1C326nXe0KAMX08ZxFwU&q=${latitude}%2C${longitude}`
        );
        // dispatch(
        //   getCurrentWeather(
        //     data.Key,
        //     data.EnglishName + " " + data.Country.EnglishName
        //   )
        // );
        // dispatch(getCurrentFiveDays(data.Key));
      } catch (error) {
        // dispatch(
        //   getCurrentWeather(
        //   )
        // );
        // dispatch(getCurrentFiveDays(328328));
      }
    }

    function error() {
      //dispatch(getCurrentWeather());
    }

    if (!navigator.geolocation) {
      //dispatch(getCurrentWeather());
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <>
      <Background />
      <Grid container justify="center">
        <Grid className={classes.searchStyle} item xs={4}>
          <Search />
        </Grid>
        <Grid item xs={10} className={classes.myStyle}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Box
                display="flex"
                flexDirection="row"
                p={3}
                m={1}
                justifyContent="space-between"
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
                  <h2>{currentWeather && currentWeather.cityName}</h2>
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
                  <Grid item key={i} xs={8} md={2} lg={2}>
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
                          ? option.Temperature.Maximum.Value
                          : (option.Temperature.Maximum.Value * 9) / 5 + 32
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
