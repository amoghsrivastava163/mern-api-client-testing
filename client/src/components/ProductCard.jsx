import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="product-card">
      <span className="category-tag">
        {product.category}
      </span>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h2>₹{product.price}</h2>

      <p
        className={
          product.stock > 0
            ? "stock-success"
            : "stock-danger"
        }
      >
        {product.stock > 0
          ? `In Stock (${product.stock})`
          : "Out of Stock"}
      </p>

      <div className="card-footer">
        <Link
          to={`/edit/${product._id}`}
          className="edit-btn"
        >
          Edit
        </Link>

        {!confirmDelete ? (
          <button
            className="delete-btn"
            onClick={() => setConfirmDelete(true)}
          >
            Delete
          </button>
        ) : (
          <button
            className="delete-btn"
            onClick={() => deleteProduct(product._id)}
          >
            Confirm
          </button>
        )}
      </div>

      <button
        className="primary-btn"
        style={{
          width: "100%",
          marginTop: "12px",
        }}
        onClick={() => {
          addToCart(product);

          toast.success("Added To Cart 🛒");
        }}
      >
        Add To Cart
      </button>

      <button
        className="primary-btn"
        style={{
          width: "100%",
          marginTop: "10px",
        }}
        onClick={() => {
          addToWishlist(product);

          toast.success("Added To Wishlist ❤️");
        }}
      >
        ❤️ Add To Wishlist
      </button>

      <Link
        to={`/reviews/${product._id}`}
        className="primary-btn"
        style={{
          display: "block",
          width: "100%",
          marginTop: "10px",
          textAlign: "center",
          textDecoration: "none",
          padding: "12px",
          boxSizing: "border-box",
        }}
      >
        ⭐ Reviews
      </Link>
    </div>
  );
};

export default ProductCard;