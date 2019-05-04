import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className="card card-product col-md-4 mb-3 ml-0 
      "
      >
        <div className="img-wrap img-prod">
          <img src={product.imagePath} />
        </div>

        <figcaption className="info-wrap">
          <h4 className="title"> {product.name} </h4>
          <p className="desc">{product.category}</p>
          {/* <div className="rating-wrap">
            <div className="label-rating">132 reviews</div>
            <div className="label-rating">154 orders </div>
          </div> */}
        </figcaption>
        <div className="bottom-wrap">
          <a href="" className="btn btn-sm btn-danger float-right">
            Supprimer Produit
          </a>
          <div className="price-wrap h5">
            <span className="price-new"> {product.prizeSell} </span>{" "}
            {/* <del className="price-old">1980dt</del> */}
          </div>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProductItem);
