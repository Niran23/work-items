import { useState } from "react";

import Login from "./components/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import About from "./pages/About";

import type { Product } from "./types/Product";

function App() {
  const [page, setPage] = useState("login");

  const [cart, setCart] = useState<Product[]>([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      {page === "login" && (
        <Login setPage={setPage} />
      )}

      {page === "products" && (
        <Products
          cart={cart}
          setCart={setCart}
          setPage={setPage}
        />
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          setCart={setCart}
          setPage={setPage}
        />
      )}

      {page === "checkout" && (
        <Checkout
          cart={cart}
          setPage={setPage}
        />
      )}

      {page === "success" && (
        <Success
          setPage={setPage}
          clearCart={clearCart}
        />
      )}

      {page === "about" && (
        <About
          setPage={setPage}
        />
      )}
    </>
  );
}

export default App;