const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: String,

    price: Number,

    category: String,

    stock: Number,

    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Wishlist",
  wishlistSchema
);