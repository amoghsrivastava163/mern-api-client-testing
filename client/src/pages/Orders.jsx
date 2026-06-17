import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch orders");
    }
  };

  const cancelOrder = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}/cancel`
      );

      toast.success("Order Cancelled");

      fetchOrders();
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel order");
    }
  };

  return (
    <div className="container">
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <h3>Order ID: {order._id}</h3>

            <p>
              <strong>Total:</strong> ₹
              {order.totalAmount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {order.status}
            </p>

            {order.status !== "Cancelled" && (
              <button
                onClick={() =>
                  cancelOrder(order._id)
                }
                className="danger-btn"
              >
                Cancel Order
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;