import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Components from "./pages/Components";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components/:componentName" component={Components} />
          <Route path="/install" component={Installation} />
        </Switch>
      </div>
    );
  }
}

export default App;
