// routes/reviewRoutes.js

const express = require("express");

const {
  addReview,
  getReviewsByProduct,
  updateReview,
  deleteReview,
} = require(
  "../controllers/reviewControllers"
);

const router = express.Router();

router.post("/", addReview);

router.get(
  "/:productId",
  getReviewsByProduct
);

router.put("/:id", updateReview);

router.delete("/:id", deleteReview);

module.exports = router;