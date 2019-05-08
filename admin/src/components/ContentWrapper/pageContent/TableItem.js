import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductItems from "./ProductItems";

class TableItem extends Component {
  render() {
    const { orders } = this.props;
    console.log(orders.orders[0]);
    return (
      <tr>
        <td>{orders.orders[0].nameUser}</td>
        <td>{orders.orders[0].tell}</td>
        <td>{orders.orders[0].prixTot}</td>
        <td>{orders.orders[0].qte}</td>
        <td>{orders.orders[0].adress}</td>
        <td>
          {orders.orders[0].productsOrdred.map(products => (
            <ProductItems products={products} />
          ))}
        </td>
        <td>
          <a href="#" className="btn btn-danger btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-trash" />
            </span>
            <span className="text">Supprimer commende</span>
          </a>
        </td>
      </tr>
    );
  }
}
TableItem.propTypes = {
  orders: PropTypes.array.isRequired
};
export default TableItem;
