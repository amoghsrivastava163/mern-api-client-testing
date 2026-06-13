const Product = require("../models/Product");
const { validationResult } = require("express-validator");

// GET ALL PRODUCTS
const getAllProducts = async (req, res, next) => {
  try {
    const { search, category, sort } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      query.category = category;
    }

    let productsQuery = Product.find(query);

    if (sort === "price_asc") {
      productsQuery = productsQuery.sort({ price: 1 });
    }

    if (sort === "price_desc") {
      productsQuery = productsQuery.sort({ price: -1 });
    }

    const products = await productsQuery;

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// GET PRODUCT BY ID
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// CREATE PRODUCT
const createProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};