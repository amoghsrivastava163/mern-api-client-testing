const Wishlist = require("../models/Wishlist");

const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find();

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const wishlistItem = await Wishlist.create(req.body);

    res.status(201).json(wishlistItem);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const removeWishlistItem = async (req, res) => {
  try {
    const deletedItem =
      await Wishlist.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Wishlist item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item removed from wishlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeWishlistItem,
};