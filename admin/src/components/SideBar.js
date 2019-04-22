import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class SideBar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <Link className="nav-link" to="addProduct">
            <i className="fas fa-fw fa-chart-area" />
            <span>Add Product</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-table" />
            <span>Products</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-table" />
            <span>Users</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </div>
    );
    const guestLinks = (
      <div>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-chart-area" />
            <span>Login</span>
          </Link>
        </li>
      </div>
    );
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        {isAuthenticated ? authLinks : guestLinks}
        {/* <!-- Sidebar Toggler (Sidebar) --> */}
      </ul>
    );
  }
}
SideBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(SideBar);
