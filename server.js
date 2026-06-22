require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Product API Running Successfully",
  });
});

app.get(
  "/test-payment",
  (req, res) => {
    res.json({
      message:
        "Payment Route Test Working",
    });
  }
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/wishlist",
  wishlistRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/reviews",
  reviewRoutes
);

app.use(
  "/api/payments",
  paymentRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(errorMiddleware);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route Not Found: ${req.originalUrl}`,
  });
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    "================================="
  );
  console.log(
    `Server running on port ${PORT}`
  );
  console.log(
    "================================="
  );
});