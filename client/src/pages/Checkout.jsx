import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, totalPrice } =
    useContext(CartContext);

  const placeOrder = async () => {
    try {
      const totalAmount =
        cartItems.reduce(
          (acc, item) =>
            acc +
            item.price * item.quantity,
          0
        );

      await axios.post(
        "http://localhost:5000/api/orders",
        {
          items: cartItems,
          totalAmount,
        }
      );

      toast.success(
        "Order Placed Successfully 🎉"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed To Place Order"
      );
    }
  };

  return (
    <div className="container">
      <h1>Checkout</h1>

      <h2>
        Total Amount: ₹{totalPrice}
      </h2>

      <button
        className="primary-btn"
        onClick={placeOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;