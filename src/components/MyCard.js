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
    if (props.temp > 20) {
      return <Sunny className="sunny" />;
    } else if (props.temp >= 10 && props.temp <= 20) {
      return <Cloudy />;
    } else {
      return <Storm />;
    }
  };

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
              <Typography gutterBottom variant="h5" component="h2">
                {props.mintemp
                  ? props.mintemp + "c" + "-" + props.maxtemp + "c"
                  : props.temp + "c"}
              </Typography>
            </CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {moment()
                .add(props.day + 1, "days")
                .format("dddd")}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
