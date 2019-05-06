import React, { Component } from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

class PanierItems extends Component {
  render() {
    const { cartId, products } = this.props;
    //console.log(products.length);

    const sommeProdcut = product => {
      let somme = 0;
      for (let i = 0; i < product.length; i++) {
        somme += parseInt(product[i].prix);
      }
      return somme;
    };

    return (
      <div className="row">
        <h4 className="mb-2">Panier</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Nom du produit</th>
              <th>prix</th>

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
          Quantité totale : <b>{products.length}</b>
        </h4>
        <h4 className="mb-2 col-md-6">
          prix totale : <b>{sommeProdcut(products)}dt</b>
        </h4>

        <button className="btn btn-primary col-md-12 mb-2">
          {" "}
          Passer une commande
        </button>
      </div>
    );
  }
}

PanierItems.propTypes = {
  products: PropTypes.object.isRequired,
  cartId: PropTypes.string.isRequired
};
export default PanierItems;
