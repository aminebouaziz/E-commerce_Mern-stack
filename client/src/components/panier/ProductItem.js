import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const { products, cartId } = this.props;
    console.log(products);
    return (
      <tr>
        <td> {products.name} </td>
        <td>1kg</td>
        <td>{products.prix}</td>
        <td>
          <button className="btn btn-danger">Supprimer</button>
        </td>
      </tr>
    );
  }
}

ProductItem.propTypes = {
  products: PropTypes.array.isRequired,
  cartId: PropTypes.string.isRequired
};

export default ProductItem;
