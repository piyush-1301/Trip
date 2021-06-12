import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GridOnIcon from "@material-ui/icons/GridOn";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <Link to="/">
        <Button>
          <HomeIcon />
        </Button>
      </Link>
      <Link to="/info">
        <Button>
          <DateRangeIcon />
        </Button>
      </Link>
      <Link to="/table">
        <Button>
          <GridOnIcon />
        </Button>
      </Link>
    </div>
  );
}

export default SideBar;
