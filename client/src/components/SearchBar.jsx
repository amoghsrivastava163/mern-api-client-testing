import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(ProductContext);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;