import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductItems extends Component {
  render() {
    const { products } = this.props;

    return (
      <ul>
        <li>{products.name}</li>
      </ul>
    );
  }
}

ProductItems.propTypes = {
  products: PropTypes.array.isRequired
};
export default ProductItems;
