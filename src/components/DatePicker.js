import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({}));

const DatePicker = props => {
  const classes = useStyles();

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="static"
      format="MM/dd/yyyy"
      margin="normal"
      id="date-picker-inline"
      label="Date picker inline"
      value={props.date}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
    />
  );
};

export default DatePicker;
