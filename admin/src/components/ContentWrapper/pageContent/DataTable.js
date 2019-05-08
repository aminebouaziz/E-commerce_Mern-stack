import React, { Component } from "react";
import TableItem from "./TableItem";
import TableFeed from "./TableFeed";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrders } from "../../../actions/orderActions";
import isEmpty from "../../../validation/is-empty";
import Spinner from "../../common/Spinner";

class DataTable extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { order } = this.props;
    let orderItems;
    if (isEmpty(order.order)) {
      console.log("waiting ...");
      orderItems = <Spinner />;
    } else {
      orderItems = <TableFeed orders={order.order} />;
      //console.log(order.order);
    }
    return (
      <div className="card shadow mb-4 col-md-10">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Tout les commandes
          </h6>
        </div>
        {orderItems}
      </div>
    );
  }
}

DataTable.propTypes = {
  getOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  order: state.order
});
export default connect(
  mapStateToProps,
  { getOrders }
)(DataTable);
