import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/productActions";
import Spinner from "../common/Spinner";

import ProductFeed from "./ProductFeed";

class PageProduits extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products, loading } = this.props.product;
    let productContent;

    productContent = <ProductFeed products={products} />;

    return (
      <div className="container">
        <h1 className="display-q text-center mb-5">Tout les produit</h1>
        <div className="row">{productContent}</div>
      </div>
    );
  }
}

PageProduits.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(PageProduits);
