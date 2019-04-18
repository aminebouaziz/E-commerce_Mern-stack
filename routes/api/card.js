const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Card model
const Card = require("../../models/Card");

// Profile Model
const Profile = require("../../models/Profile");

// Product Model
const Product = require("../../models/Product");

//Validation
const validateCardInput = require("../../validation/feedback");

// @route POST api/Card
// @desc create a Card
// @access private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //   const { errors, isValid } = validateFeedbackInput(req.body);

    //   //Check validation
    //   if (!isValid) {
    //     // if any errors, send 400 with errors object
    //     return res.status(400).json(errors);
    //   }

    const newCard = new Card({
      nameProduct: req.body.nameProduct,
      totPrize: req.body.totPrize,
      totQte: req.body.totQte,
      user: req.user.id
    });
    newCard.save().then(card => res.json(card));
  }
);

// @route POST api/card/addProduct/:id
// @desc Add card
// @access Private
router.post(
  "/addProduct/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Card.findById(req.params.id)
        .then(card => {
          //   if (
          //     card.products.filter(
          //       product => product.product.toString() === req.product.id
          //     )
          //   ) {
          //     return res.status
          //       .status(400)
          //       .json({ alreadAdded: "  already add  this Product" });
          //   }
          // Add product id to Product array
          card.products.unshift({ product: req.product.id });
          card.save().then(card => res.json(card));
        })
        .catch(err =>
          res.status(404).json({ productnotfound: " product  already Added" })
        );
    });
  }
);

module.exports = router;
