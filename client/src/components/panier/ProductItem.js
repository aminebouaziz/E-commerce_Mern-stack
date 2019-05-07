import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeProduct } from "../../actions/cartActions";

class ProductItem extends Component {
  ClickremoveProduct = (cartId, productsId) => {
    this.props.removeProduct(cartId, productsId);
  };

  render() {
    const { products, cartId, profile } = this.props;

    return (
      <tr>
        <td> {products.name} </td>

        <td>{products.prix}</td>
        <td>
          <button
            onClick={() => {
              this.ClickremoveProduct(cartId, products._id);
            }}
            className="btn btn-danger"
          >
            Supprimer
          </button>
        </td>
      </tr>
    );
  }
}

ProductItem.propTypes = {
  products: PropTypes.object.isRequired,
  cartId: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { removeProduct }
)(ProductItem);
