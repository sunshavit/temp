import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Cloudy, Storm, Sunny } from "../Icons";
import { Grid } from "@material-ui/core";
import { Today } from "@material-ui/icons";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MyCard = (props) => {
  const today = moment().format("dddd");

  const renderIcon = () => {
    let mul = 1;
    let sum = 0;
    if (props.type === "F") {
      mul = 9 / 5;
      sum = 32;
    }
    if (props.temp > 20 * mul + sum) {
      return <Sunny animation={"sunny"} />;
    } else if (props.temp >= 10 * mul + sum && props.temp <= 20 * mul + sum) {
      return <Cloudy />;
    } else {
      return <Storm />;
    }
  };

  let type = "°C";
  if (props.type === "F") {
    type = "F";
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <div>{renderIcon()}</div>
          </Grid>
          <Grid item xs={10}>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {props.mintemp
                  ? props.mintemp + type + " - " + props.maxtemp + type
                  : props.temp + type}
              </Typography>
            </CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.day != undefined
                ? moment()
                    .add(props.day + 1, "days")
                    .format("dddd")
                : props.cityname}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
