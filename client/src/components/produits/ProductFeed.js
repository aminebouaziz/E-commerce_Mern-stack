import React, { Component } from "react";
import PropTypes from "prop-types";

import ProduitItem from "./ProduitItem";

class ProductFeed extends Component {
  render() {
    const { products, cartId } = this.props;

    return products.map(product => (
      <ProduitItem key={product._id} cartId={cartId} product={product} />
    ));
  }
}
ProductFeed.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductFeed;
