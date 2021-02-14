import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Switch from "./SwitchTemp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width: "100%",
  },
}));

function Nav() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          <Link to="/">Weather App</Link>{" "}
        </Typography>
        <Switch />
        {/* <Typography>dasd</Typography> */}
        <Button color="inherit">
          <Link to="/">Home</Link>{" "}
        </Button>
        <Button color="inherit">
          <Link to="/favorites">Favorites</Link>{" "}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
