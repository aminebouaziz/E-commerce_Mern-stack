import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductItems from "./ProductItems";
import {deleteOrder} from '../../../actions/orderActions'
import { connect } from "react-redux";


class TableItem extends Component {

  delete = (idOrder) =>{
   this.props.deleteOrder(idOrder);
      console.log(idOrder);
      window.location.href = "/dashboard";
  }

  render() {
    const { orders } = this.props;
    //console.log("order",orders.orders[0]._id);

   

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
          <a  className="btn btn-danger btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-trash" />
            </span>
            <button onClick={()=>{this.delete(orders._id)}} className="text btn ">Supprimer commende</button>
          </a>
        </td>
      </tr>
    );
  }
}
TableItem.propTypes = {
  orders: PropTypes.array.isRequired,
  deleteOrder : PropTypes.func.isRequired
};
const mapStateToProps = state =>({

})
export default connect(mapStateToProps,{deleteOrder})(TableItem);
