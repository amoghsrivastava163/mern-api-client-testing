const express = require("express");

const {
  placeOrder,
  getOrders,
  getOrderById,
  cancelOrder,
} = require("../controllers/orderControllers");

const router = express.Router();

router.post("/", placeOrder);

router.get("/", getOrders);

router.get("/:id", getOrderById);

router.put("/:id/cancel", cancelOrder);

module.exports = router;