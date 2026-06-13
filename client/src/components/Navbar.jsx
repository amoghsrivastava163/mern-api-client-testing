import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Product Manager</h2>

      <div className="nav-links">
        <nav>
  <Link to="/">Products</Link>
  <Link to="/add">Add Product</Link>
</nav>
      </div>
    </nav>
  );
};

export default Navbar;