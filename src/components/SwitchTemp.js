import { Grid, Switch } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { setCelsius } from "../actions/IfCelsiusAction";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#63c1ff",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function SwitchTemp() {
  const dispatch = useDispatch();

  const ifCelsius = useSelector((state) => {
    return state.ifCelsius;
  });

  const handleChange = (e) => {
    dispatch(setCelsius(e.target.checked));
  };

  return (
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>Fahrenheit</Grid>
      <Grid item>
        <AntSwitch
          checked={ifCelsius}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
      </Grid>
      <Grid item>Celsius</Grid>
    </Grid>
  );
}

export default SwitchTemp;
