import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sec1 from "./Sec1";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("");
    }
  }
  render() {
    return (
      <div className="landingPage">
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">LA PATISSERIE</h1>
                <p className="lead">
                  La pâtisserie désigne à la fois certaines préparations
                  culinaires sucrées à base de pâte1, l'ensemble des opérations
                  pour leur confection, la boutique où se vendent ces
                  préparations faites par un pâtissier ou par l'industrie
                  agroalimentaire, ainsi que cette même industrie de
                  transformation et de commercialisation de ces produits :
                  gâteaux et tartes notamment.
                </p>
              
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      <Sec1/>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
