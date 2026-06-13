import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";

import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products, loading } =
    useContext(ProductContext);

  return (
    <>
      <Navbar />

      <div className="toolbar">
        <SearchBar />
        <FilterBar />

        <Link to="/add" className="primary-btn">
          Add Product
        </Link>
      </div>

      <div className="product-grid">
        {loading ? (
          <h2>Loading Products...</h2>
        ) : products.length === 0 ? (
          <div className="empty-state">
            <h2>📦 No products found</h2>
            <p>Add your first product</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;