import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GridOnIcon from "@material-ui/icons/GridOn";
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <Paper elevation={3}>
        <div className="SideBarDiv">
          <Link to="/">
            <Button style={{ padding: "15px" }}>
              <HomeIcon />
            </Button>
          </Link>
          <Link to="/info">
            <Button style={{ padding: "15px" }}>
              <DateRangeIcon />
            </Button>
          </Link>
          <Link to="/table">
            <Button style={{ padding: "15px" }}>
              <GridOnIcon />
            </Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
}

export default SideBar;
