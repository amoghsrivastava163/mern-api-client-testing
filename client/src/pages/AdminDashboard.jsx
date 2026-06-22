import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState("asc");

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 5;

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalRevenue =
    orders.reduce(
      (sum, order) =>
        sum +
        (order.totalAmount || 0),
      0
    );

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const sortedProducts = [
    ...filteredProducts,
  ].sort((a, b) =>
    sortOrder === "asc"
      ? a.price - b.price
      : b.price - a.price
  );

  const indexOfLastProduct =
    currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct -
    productsPerPage;

  const currentProducts =
    sortedProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div className="card">
          <h3>
            Total Products
          </h3>
          <h2>
            {products.length}
          </h2>
        </div>

        <div className="card">
          <h3>
            Total Orders
          </h3>
          <h2>
            {orders.length}
          </h2>
        </div>

        <div className="card">
          <h3>
            Total Revenue
          </h3>
          <h2>
            ₹{totalRevenue}
          </h2>
        </div>

        <div className="card">
          <h3>
            Total Users
          </h3>
          <h2>25</h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(
              e.target.value
            )
          }
        >
          <option value="asc">
            Price Low → High
          </option>

          <option value="desc">
            Price High → Low
          </option>
        </select>
      </div>

      <h2>
        Product Management
      </h2>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {currentProducts.map(
            (product) => (
              <tr
                key={
                  product._id
                }
              >
                <td>
                  {product.name}
                </td>

                <td>
                  {
                    product.category
                  }
                </td>

                <td>
                  ₹
                  {
                    product.price
                  }
                </td>

                <td>
                  {
                    product.stock
                  }
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {Array.from(
          {
            length:
              Math.ceil(
                sortedProducts.length /
                  productsPerPage
              ),
          },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(
                  index + 1
                )
              }
              style={{
                margin:
                  "0 5px",
              }}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;