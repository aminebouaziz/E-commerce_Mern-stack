import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import SideBar from "./components/SideBar";
import ContainWrapper from "./components/ContentWrapper/ContentWrapper";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <ContainWrapper />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
