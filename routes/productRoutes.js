const express = require("express");
const { body } = require("express-validator");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", getAllProducts);

// GET PRODUCT BY ID
router.get("/:id", getProductById);

// CREATE PRODUCT
router.post(
  "/",
  [
    body("name")
      .notEmpty()
      .withMessage("Product name is required"),

    body("price")
      .notEmpty()
      .withMessage("Price is required")
      .isNumeric()
      .withMessage("Price must be a number"),

    body("category")
      .notEmpty()
      .withMessage("Category is required"),

    body("stock")
      .notEmpty()
      .withMessage("Stock is required")
      .isNumeric()
      .withMessage("Stock must be a number"),
  ],
  createProduct
);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;