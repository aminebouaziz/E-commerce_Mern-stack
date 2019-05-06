import React, { Component } from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

class PanierItems extends Component {
  render() {
    const { cartId, products } = this.props;

    return (
      <div className="row">
        <h4 className="mb-2">Panier</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Nom du produit</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products.map(products => (
              <ProductItem products={products} cartId={cartId} />
            ))}
          </tbody>
        </table>
        <h4 className="mb-2 col-md-6">
          Quantité totale : <b>2</b>
        </h4>
        <h4 className="mb-2 col-md-">
          prix totale : <b>68.00dt</b>
        </h4>
      </div>
    );
  }
}

PanierItems.propTypes = {
  products: PropTypes.array.isRequired,
  cartId: PropTypes.string.isRequired
};
export default PanierItems;
