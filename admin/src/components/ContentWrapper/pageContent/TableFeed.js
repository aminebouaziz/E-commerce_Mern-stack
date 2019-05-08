import React, { Component } from "react";
import TableItem from "./TableItem";
import PropTypes from "prop-types";

class TableFeed extends Component {
  render() {
    const { orders } = this.props;

    return (
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nom prenom</th>
                <th>Télephone</th>
                <th>Prix Totale</th>
                <th>Quantité produits</th>
                <th>Adresse</th>
                <th>Porduits commender</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {orders.map(orders => (
                <TableItem orders={orders} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
TableFeed.propTypes = {
  orders: PropTypes.array.isRequired
};
export default TableFeed;
