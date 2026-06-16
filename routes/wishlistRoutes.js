const express = require("express");

const router = express.Router();

const {
  getWishlist,
  addToWishlist,
  removeWishlistItem,
} = require("../controllers/wishlistControllers");

router.get(
  "/",
  getWishlist
);

router.post(
  "/",
  addToWishlist
);

router.delete(
  "/:id",
  removeWishlistItem
);

module.exports = router;