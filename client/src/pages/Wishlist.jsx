import { useContext } from "react";

import Navbar from "../components/Navbar";

import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const {
    wishlist,
    removeWishlist,
  } = useContext(
    WishlistContext
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Wishlist</h1>

        {wishlist.length === 0 ? (
          <h3>
            No products in wishlist
          </h3>
        ) : (
          wishlist.map((item) => (
            <div
              key={item._id}
              className="product-card"
              style={{
                marginBottom:
                  "20px",
              }}
            >
              <h2>{item.name}</h2>

              <p>
                {
                  item.description
                }
              </p>

              <p>
                ₹{item.price}
              </p>

              <button
                className="delete-btn"
                onClick={() =>
                  removeWishlist(
                    item._id
                  )
                }
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Wishlist;