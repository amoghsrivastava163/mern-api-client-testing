import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    products,
    updateProduct,
    loading,
  } = useContext(ProductContext);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const product = products.find(
    (p) => String(p._id) === String(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleUpdate = async (updatedData) => {
    try {
      await updateProduct(id, updatedData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-page">
      <h1>Edit Product</h1>

      <ProductForm
        initialData={product}
        onSubmit={handleUpdate}
        buttonText="Update Product"
      />
    </div>
  );
};

export default EditProduct;