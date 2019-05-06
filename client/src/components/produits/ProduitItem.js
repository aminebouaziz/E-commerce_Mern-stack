import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { addProduct } from "../../actions/cartActions";
class ProduitItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.product.name,
      prix: this.props.product.prizeSell
    };
  }

  onClickAjout = e => {
    const { cartId } = this.props;

    const productContent = {
      name: this.state.name,
      prix: this.state.prix
    };
    this.props.addProduct(cartId, productContent);
  };

  render() {
    const { product, cartId } = this.props;

    return (
      <div
        className="card card-product col-md-4 mb-3 ml-0 
      "
      >
        <div className="img-wrap">
          <img src={product.imagePath} />
        </div>

        <figcaption className="info-wrap">
          <h4 className="title"> {product.name} </h4>
          <p className="desc">{product.category}</p>
          {/* <div className="rating-wrap">
            <div className="label-rating">132 reviews</div>
            <div className="label-rating">154 orders </div>
          </div> */}
        </figcaption>
        <div className="bottom-wrap">
          <button
            onClick={this.onClickAjout}
            className="btn btn-sm btn-primary float-right"
          >
            Ajouter au panier
          </button>
          <div className="price-wrap h5">
            <span className="price-new"> {product.prizeSell} </span>{" "}
            {/* <del className="price-old">1980dt</del> */}
          </div>
        </div>
      </div>
    );
  }
}

ProduitItem.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addProduct }
)(ProduitItem);
