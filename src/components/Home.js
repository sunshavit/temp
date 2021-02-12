import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import MyCard from "./MyCard";
import Search from "./Search";
import { Box, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { londonWeather } from "../data";
import { fiveDays } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../actions/CurrentWeatherAction";
import { getCurrentFiveDays } from "../actions/CurrentFiveDaysAction";
import { Sunny } from "../Icons";
import {
  addToFavorite,
  removeFromFavorite,
  getFromLocalSroge,
} from "../actions/FavoriteCitiesAction";

function Home() {
  const currentWeather = useSelector((state) => {
    return state.currentWeather;
  });

  const currentFiveDays = useSelector((state) => {
    return state.currentFiveDays ? state.currentFiveDays.DailyForecasts : null;
  });

  const dispatch = useDispatch();
  // const [currentWeather, setCurrentWeather] = useState("");
  const [favIcon, setFavIcon] = useState(false);

  useEffect(() => {
    //dispatch(getCurrentWeather(57911, "London UK"));
    //dispatch(getCurrentFiveDays(57911));
    dispatch(getFromLocalSroge(JSON.parse(localStorage.getItem("fav"))));
  }, []);

  const favoriteOnClick = () => {
    if (!favIcon) {
      dispatch(addToFavorite(currentWeather.cityName, currentWeather.key));
    } else {
      dispatch(removeFromFavorite(currentWeather.cityName, currentWeather.key));
    }
    setFavIcon((prev) => !prev);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        <Search />
      </Grid>
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="row"
                  p={3}
                  m={1}
                  bgcolor="background.paper"
                  justifyContent="space-between"
                >
                  <Box p={1}>
                    <MyCard
                      day={-1}
                      temp={
                        currentWeather
                          ? currentWeather.Temperature.Metric.Value
                          : 21
                      }
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
                    <Grid key={i} item xs={8} md={3} lg={2}>
                      <MyCard
                        maxtemp={option.Temperature.Maximum.Value}
                        mintemp={option.Temperature.Minimum.Value}
                        temp={option.Temperature.Maximum.Value}
                        day={i}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
