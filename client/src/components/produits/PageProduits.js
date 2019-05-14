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
    const { products, loading,  } = this.props.product;
    const { cart ,auth} = this.props;
    let buttonAuth
   
    let productContent;

    // if (cart.cart === null) {
    //   console.log(cart);
    // } else {
    //   console.log(cart);
    // }

    if (products === {}) {
      productContent = <Spinner />;
    } else {
      if (cart.cart === null) {
        productContent = <ProductFeed auth={auth.isAuthenticated} products={products} />;
      } else {
        productContent = (
          <ProductFeed auth={auth.isAuthenticated} cartId={cart.cart._id} products={products} />
        );
      }
    }

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
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  cart: state.cart,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProducts }
)(PageProduits);
