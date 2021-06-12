import React, { useState, useEffect } from "react";
import "./Home.css";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import { useStateValue } from "../../StateProvider";

function Home() {
  const [{ basket }, dispatch] = useStateValue();
  //   const []
  useEffect(() => {}, [basket]);
  return (
    <div className="Home">
      <div className="all">
        <div>
          <span className="allNumber">{basket?.length}</span>trip
        </div>
      </div>
      <div className="topics">
        <div>
          <span className="number">
            {basket?.filter((i) => i.type === "Tropic").length}
          </span>
          <WbSunnyIcon />
        </div>
        <div>
          <span className="number">
            {basket?.filter((i) => i.type === "Trek").length}
          </span>
          <FilterHdrIcon />
        </div>
        <div>
          <span className="number">
            {basket?.filter((i) => i.type === "Club").length}
          </span>
          <LocalCafeIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;
