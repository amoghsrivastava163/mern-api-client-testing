const express = require("express");
const router = express.Router();

const {
  createOrder,
  verifyPayment,
  getPayments,
} = require("../controllers/paymentControllers");

// Create Razorpay Order
router.post(
  "/create-order",
  createOrder
);

// Verify Payment
router.post(
  "/verify-payment",
  verifyPayment
);

// Get Payment History
router.get(
  "/history",
  getPayments
);

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Payment Routes Working Successfully",
  });
});

module.exports = router;