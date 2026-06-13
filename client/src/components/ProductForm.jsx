import { useState } from "react";

const ProductForm = ({
  initialData = {},
  onSubmit,
  buttonText,
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    description: initialData.description || "",
    price: initialData.price || "",
    category: initialData.category || "Electronics",
    stock: initialData.stock || "",
    imageUrl: initialData.imageUrl || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      className="product-form"
      onSubmit={submitHandler}
    >
      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Food</option>
        <option>Books</option>
        <option>Home</option>
        <option>Other</option>
      </select>

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
      />

      <input
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <button type="submit" className="primary-btn">
  {buttonText || "Save Product"}
</button>
    </form>
  );
};

export default ProductForm;