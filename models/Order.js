const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const OrderSchema = new Schema({
  orders: [
    {
      Card: {
        type: Schema.Types.ObjectId,
        ref: "cards"
      },
      nameUser: {
        type: String
      },
      adress: {
        type: String
      },
      tell: {
        type: String
      },
      productsOrdred: {
        type: Array
      },
      prixTot: {
        type: Number
      },
      qte: {
        type: Number
      }
    }
  ]
});
module.exports = Order = mongoose.model("order", OrderSchema);
