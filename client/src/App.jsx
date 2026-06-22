import Payment from "./pages/Payment";
import Reviews from "./pages/Reviews";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductList />}
        />

        <Route
          path="/add"
          element={<AddProduct />}
        />

        <Route
          path="/edit/:id"
          element={<EditProduct />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
        <Route
  path="/reviews/:productId"
  element={<Reviews />}
/>
<Route
  path="/payment"
  element={<Payment />}
/>

        <Route
          path="/orders"
          element={<Orders />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;