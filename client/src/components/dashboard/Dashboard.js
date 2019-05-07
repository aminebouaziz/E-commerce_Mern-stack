import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profilesAction";
import { getCurrentCart } from "../../actions/cartActions";

import { Link } from "react-router-dom";

import Spinner from "../common/Spinner";
import ProfileAction from "./ProfileAction";
import PanierItems from "../panier/PanierItems";
import isEmpty from "../../validation/is-empty";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getCurrentCart();
  }
  onDeleteClick = e => {
    this.props.deleteAccount();
  };
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { cart } = this.props.cart;

    let dashboardContent;
    let cartItems;

    if (profile === null || loading || cart === null) {
      dashboardContent = <Spinner />;
    } else {
      //console.log(cart.products);

      // Cheack if logged user has profile
      if (Object.keys(profile).length > 0) {
        if (isEmpty(cart.products)) {
          cartItems = <h1>Vous devez choisir des produits</h1>;
        } else {
          cartItems = (
            <PanierItems products={cart.products} cartId={cart._id} />
          );
        }

        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome
              <Link to={`/profile/${profile.handle}`}> {user.name} </Link>
            </p>
            <ProfileAction />
            {/* TODO : Panier */}
            <div style={{ marginBottom: "60px" }}>
              <button onClick={this.onDeleteClick} className="btn btn-danger">
                Supprimer Mon Compte
              </button>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name} </p>
            <p>You have not yet setup a profile , pleas add some info </p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
              <hr />
              {cartItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  cart: state.cart,
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount, getCurrentCart }
)(Dashboard);
