// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    required: true,
    enum: ["Electronics", "Clothing", "Food", "Books", "Home", "Other"]
  },
  stock: { type: Number, required: true, default: 0 },
  imageUrl: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
