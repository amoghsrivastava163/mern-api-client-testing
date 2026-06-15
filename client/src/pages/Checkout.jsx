const Checkout = () => {
  return (
    <div className="container">
      <h1>Checkout</h1>

      <form className="product-form">
        <input
          placeholder="Full Name"
        />

        <input
          placeholder="Email"
        />

        <textarea
          placeholder="Address"
        />

        <button
          type="submit"
          className="primary-btn"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;