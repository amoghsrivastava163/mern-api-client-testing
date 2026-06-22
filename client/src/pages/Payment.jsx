import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Payment = () => {
  const [amount, setAmount] = useState(1000);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/payments/create-order",
        {
          amount,
        }
      );

      const options = {
        key: "rzp_test_T4MKJ7uWDhN6fW",

        amount: data.amount,

        currency: data.currency,

        name: "Insta Dot Analytics",

        description: "MERN Internship Payment",

        order_id: data.id,

        handler: async function (response) {
          await axios.post(
            "http://localhost:5000/api/payments/verify-payment",
            {
              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              amount,
            }
          );

          toast.success(
            "Payment Successful!"
          );
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(
        options
      );

      razor.open();
    } catch (error) {
      console.error(error);

      toast.error(
        "Payment Failed"
      );
    }
  };

  return (
    <div className="container">
      <h1>Payment Gateway</h1>

      <h2>
        Amount: ₹{amount}
      </h2>

      <button
        className="primary-btn"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;