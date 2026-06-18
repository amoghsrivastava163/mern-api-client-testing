// controllers/reviewControllers.js

const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getReviewsByProduct = async (
  req,
  res
) => {
  try {
    const reviews = await Review.find({
      productId: req.params.productId,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateReview = async (
  req,
  res
) => {
  try {
    const review =
      await Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
        }
      );

    res.json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteReview = async (
  req,
  res
) => {
  try {
    await Review.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Review Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};