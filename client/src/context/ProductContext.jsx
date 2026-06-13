import { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/products");

      setProducts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData) => {
    await axiosInstance.post("/products", productData);
    fetchProducts();
  };

  const updateProduct = async (id, productData) => {
    await axiosInstance.put(`/products/${id}`, productData);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axiosInstance.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const keyword = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(keyword) ||
        product.description?.toLowerCase().includes(keyword)
      );
    })
    .filter((product) =>
      category ? product.category === category : true
    )
    .sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      return 0;
    });

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        loading,
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort,
        fetchProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};