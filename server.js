const reviewRoutes = require(
  "./routes/reviewRoutes"
);
const orderRoutes = require("./routes/orderRoutes");

const wishlistRoutes = require(
  "./routes/wishlistRoutes"
);
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Product API Running Successfully",
  });
});

app.use("/api/products", productRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.use(
  "/api/wishlist",
  wishlistRoutes
);
app.use("/api/orders", orderRoutes);
app.use(
  "/api/reviews",
  reviewRoutes
);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});