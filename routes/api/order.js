const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//feedback model
const Card = require("../../models/Card");

//order model
const Order = require("../../models/Order");

// @route GET api/order
// @desc get orders
// @access private
router.get("/", (req, res) => {
  const errors = {};
  Order.find()
    .then(order => {
      if (!order) {
        errors.noorder = "There are no order";
        return res.status(404).json(errors);
      }
      res.json(order);
    })
    .catch(err => res.status(404).json(err));
});

// @route POST api/order/addOrder/:card_id
// @desc Add to order
// @access Private
router.post(
  "/addOrder/:card_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Card.findById(req.params.card_id)
      .then(card => {
        let orderItem = {
          nameUser: req.body.nameUser,
          adress: req.body.adress,
          tell: req.body.tell,
          productsOrdred: req.body.productsOrdred,
          prixTot: req.body.prixTot,
          qte: req.body.qte
        };
        new Order().save().then(Order => {
          Order.orders.unshift(orderItem);
          Order.save().then(Order => res.json(Order));
          console.log(Order);
        });
      })
      .catch(err => res.status(404).json({ cardnotfound: " card not found " }));
  }
);

//  @route DELETE api/order/:id
//  @desc Delete a order
//  @acess Public
router.delete(
  "/:id",
 
  (req, res) => {
    Order.findById(req.params.id)
      .then(order => order.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  }
);

module.exports = router;
