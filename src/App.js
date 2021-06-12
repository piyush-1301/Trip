import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./component/info/Info";
import SideBar from "./component/sideBar/SideBar";
import Home from "./component/home/Home";
import Table from "./component/table/Table";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/info">
            <SideBar />
            <Info />
          </Route>
          <Route path="/table">
            <SideBar />
            <Table />
          </Route>
          <Route path="/">
            <SideBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
