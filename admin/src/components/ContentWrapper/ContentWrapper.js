import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TopBar from "./TopBar";
import SideBar from "../SideBar";
import PageContent from "./pageContent/PageContent";
import Footer from "./Footer";
import Form from "./AddItem/Form";
import Products from "./Products/Products";
import Login from "./Login";

class ContainWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <TopBar />
            <Route path="/dashboard" component={PageContent} />
            <Route path="/addProduct" component={Form} />
            <Route path="/products" component={Products} />
            <Route exact path="/" component={Login} />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default ContainWrapper;
