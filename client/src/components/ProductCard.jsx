import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { deleteProduct } =
    useContext(ProductContext);

  const { addToCart } =
    useContext(CartContext);

  const [confirmDelete, setConfirmDelete] =
    useState(false);

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
            onClick={() =>
              setConfirmDelete(true)
            }
          >
            Delete
          </button>
        ) : (
          <button
            className="delete-btn"
            onClick={() =>
              deleteProduct(product._id)
            }
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
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;