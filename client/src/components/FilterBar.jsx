import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const FilterBar = () => {
  const {
    category,
    setCategory,
    sort,
    setSort,
  } = useContext(ProductContext);

  return (
    <>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter-select"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
        <option value="Books">Books</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="filter-select"
      >
        <option value="">Sort By</option>
        <option value="price_asc">
          Price: Low → High
        </option>
        <option value="price_desc">
          Price: High → Low
        </option>
      </select>
    </>
  );
};

export default FilterBar;