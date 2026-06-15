import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="product-card"
            >
              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <p>Qty: {item.quantity}</p>

              <button
                onClick={() =>
                  removeFromCart(item._id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;