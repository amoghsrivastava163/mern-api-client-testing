const express = require("express");

const router = express.Router();

const adminProtect = require(
  "../middleware/adminMiddleware"
);

router.get(
  "/dashboard",
  adminProtect,
  (req, res) => {
    res.json({
      success: true,
      message:
        "Admin Dashboard Access Granted",
    });
  }
);

module.exports = router;