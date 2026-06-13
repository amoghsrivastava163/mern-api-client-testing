import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import { ProductContext } from "../context/ProductContext";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await addProduct(data);
    navigate("/");
  };

  return (
    <div className="form-page">
      <h1>Add Product</h1>

      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;