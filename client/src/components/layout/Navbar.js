import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const bgColors = {
      Default: "#2b3131",
      Blue: "#00B1E1",
      Cyan: "#37BC9B",
      Green: "#8CC152",
      Red: "#E9573F",
      Yellow: "#F6BB42"
    };
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark  mb-4"
        style={{ backgroundColor: bgColors.Default }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            LA PATTISERIE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  {" "}
                  Produit
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
