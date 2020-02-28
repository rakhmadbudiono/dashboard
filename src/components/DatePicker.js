import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({}));

const DatePicker = props => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="static"
      format="MM/dd/yyyy"
      margin="normal"
      id="date-picker-inline"
      label="Date picker inline"
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
    />
  );
};

export default DatePicker;
