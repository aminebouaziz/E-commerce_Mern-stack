import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
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
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  S'inscrire
                </Link>
                <Link to="login" className="btn btn-lg btn-light">
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
