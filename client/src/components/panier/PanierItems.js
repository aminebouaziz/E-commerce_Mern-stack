import React, { Component } from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { passOrder, deleteCart } from "../../actions/cartActions";

class PanierItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameUser: this.props.profile.profile.handle,
      adress: this.props.profile.profile.adress,
      tell: this.props.profile.profile.tell,
      productsOrdred: this.props.products,
      prixTot: 0,
      qte: 0
    };
  }
  componentDidMount() {
    const { products } = this.props;
    let somme = 0;
    for (let i = 0; i < products.length; i++) {
      somme += parseInt(products[i].prix);
    }
    this.setState({
      prixTot: somme
    });
    this.setState({
      qte: products.length
    });
  }

  onClickPassOrder = e => {
    const { cartId } = this.props;
    const orderItem = {
      nameUser: this.state.nameUser,
      adress: this.state.adress,
      tell: this.state.tell,
      productsOrdred: this.state.productsOrdred,
      prixTot: this.state.prixTot,
      qte: this.state.qte
    };
    this.props.passOrder(cartId, orderItem);
    console.log("c bon ", orderItem);
    this.props.deleteCart(cartId);
    window.location.href = "/product";
  };

  render() {
    const { cartId, products, profile } = this.props;
    // console.log(products[0]);
    //console.log(profile.profile.handle);
    console.log(this.state);
    const sommeProdcut = product => {
      let somme = 0;
      for (let i = 0; i < product.length; i++) {
        somme += parseInt(product[i].prix);
      }

      return somme;
    };
    let priTot = sommeProdcut(products);

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
          prix totale : <b>{priTot}dt</b>
        </h4>

        <button
          onClick={() => {
            this.onClickPassOrder();
          }}
          className="btn btn-primary col-md-12 mb-2"
        >
          {" "}
          Passer une commande
        </button>
      </div>
    );
  }
}

PanierItems.propTypes = {
  products: PropTypes.object.isRequired,
  cartId: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  passOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { passOrder, deleteCart }
)(PanierItems);
