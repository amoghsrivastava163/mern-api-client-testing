import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Product Manager
      </h2>

      <div className="nav-links">
        <Link to="/">
          Products
        </Link>

        <Link to="/cart">
          Cart
        </Link>

        <Link to="/checkout">
          Checkout
        </Link>

        <Link to="/add">
          Add Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;