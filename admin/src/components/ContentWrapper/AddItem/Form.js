import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { addPorduct } from "../../../actions/productActions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imagePath: "",
      category: "",
      prizeFourn: "",
      prizeSell: "",
      quantity: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const ProductData = {
      name: this.state.name,
      imagePath: this.state.imagePath,
      category: this.state.category,
      prizeFourn: this.state.prizeFourn,
      prizeSell: this.state.prizeSell,
      quantity: this.state.quantity
    };
    this.props.addPorduct(ProductData, this.props.history);
    console.log(ProductData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="productForm container">
        <h1 className="display-q text-center">Creation de produit</h1>
        <p className="lead text-center">
          Entrer le information pour crée votre produit
        </p>
        <form onSubmit={this.onSubmit} className="Form col-md-8 ml-5">
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Nom du produi</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
                placeholder="Nom du produit"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Lien de l'image</label>
              <input
                type="text"
                className="form-control"
                placeholder="image"
                value={this.state.imagePath}
                onChange={this.onChange}
                name="imagePath"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Prix de base</label>
              <input
                type="number"
                className="form-control"
                placeholder="Prix de base"
                value={this.state.prizeFourn}
                onChange={this.onChange}
                name="prizeFourn"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Prix de vente</label>
              <input
                type="number"
                className="form-control"
                placeholder="prix"
                value={this.state.prizeSell}
                onChange={this.onChange}
                name="prizeSell"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Quantité</label>
              <input
                type="number"
                className="form-control"
                placeholder="quantit"
                value={this.state.quantity}
                onChange={this.onChange}
                name="quantity"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Category</label>
              <select
                className="form-control"
                name="category"
                value={this.state.category}
                onChange={this.onChange}
              >
                <option defaultValue disabled>
                  Categorie
                </option>
                <option >Salé</option>
                <option>Sucré</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Crée le produit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  product: PropTypes.object.isRequired,
  addPorduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { addPorduct }
)(withRouter(Form));
