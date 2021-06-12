import "date-fns";
import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useStateValue } from "../../StateProvider";

const types = [
  {
    value: "Trek",
    label: "Trek",
  },
  {
    value: "Club",
    label: "Club",
  },
  {
    value: "Tropic",
    label: "Tropic",
  },
];

function Info() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date("2021-06-11"));
  const [city, setCity] = useState("");

  const [type, setType] = useState("Trek");
  const [{ basket }, dispatch] = useStateValue();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    var da = selectedDate.getUTCDate();

    var month = selectedDate.getUTCMonth() + 1;

    var year = selectedDate.getUTCFullYear();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        date: da + "/" + month + "/" + year,
        city: city,
        type: type,
      },
    });
    setSelectedDate(new Date("2021-06-11"));
    setCity("");
    setType("Trek");
    console.log(basket);
  };

  return (
    // <Paper className={classes.paper}>
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
      }}
    >
      <Paper elevation={3}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          // onSubmit={handleSubmit}
        >
          <h1>Add a trip</h1>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date:"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="outlined-basic"
            label="Place"
            variant="outlined"
            value={city}
            onChange={handleChangeCity}
          />
          <TextField
            id="outlined-select-currency-native"
            select
            label="Type:"
            value={type}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your type"
            variant="outlined"
          >
            {types.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
    // </Paper>
  );
}

export default Info;
