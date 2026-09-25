import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

import type { Product } from "../types/Product";

type ProductsProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setPage: (page: string) => void;
};

const products: Product[] = [
  {
    id: 1,
    name: "Sauce Labs Backpack",
    price: 29.99,
    image:
      "https://www.saucedemo.com/images/sauce-backpack.jpg",
  },
  {
    id: 2,
    name: "Sauce Labs Bike Light",
    price: 9.99,
    image:
      "https://www.saucedemo.com/images/bike-light.jpg",
  },
  {
    id: 3,
    name: "Sauce Labs Bolt T-Shirt",
    price: 15.99,
    image:
      "https://www.saucedemo.com/images/bolt-t-shirt.jpg",
  },
  {
    id: 4,
    name: "Sauce Labs Fleece Jacket",
    price: 49.99,
    image:
      "https://www.saucedemo.com/images/sauce-pullover.jpg",
  },
  {
    id: 5,
    name: "Sauce Labs Onesie",
    price: 7.99,
    image:
      "https://www.saucedemo.com/images/sauce-onesie.jpg",
  },
  {
    id: 6,
    name: "Sauce Labs Red T-Shirt",
    price: 15.99,
    image:
      "https://www.saucedemo.com/images/red-tatt-crewneck.jpg",
  },
];

function Products({
  cart,
  setCart,
  setPage,
}: ProductsProps) {

  const [sortOption, setSortOption] =
    useState("name-asc");

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // Add product only if it is not already in cart
  const addToCart = (product: Product) => {
    setCart((previousCart) => {

      const alreadyInCart = previousCart.some(
        (item) => item.id === product.id
      );

      if (alreadyInCart) {
        return previousCart;
      }

      return [
        ...previousCart,
        product,
      ];
    });
  };

  // Remove one product
  const removeFromCart = (id: number) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== id
      )
    );
  };

  const handleLogout = () => {
    setCart([]);
    setSelectedProduct(null);
    setSidebarOpen(false);
    setPage("login");
  };

  const handleReset = () => {
    setCart([]);
    setSelectedProduct(null);
    setSortOption("name-asc");
    setSidebarOpen(false);
  };

  const sortedProducts = [...products].sort(
    (a, b) => {

      if (sortOption === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      if (sortOption === "name-desc") {
        return b.name.localeCompare(a.name);
      }

      if (sortOption === "price-asc") {
        return a.price - b.price;
      }

      if (sortOption === "price-desc") {
        return b.price - a.price;
      }

      return 0;
    }
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}

        onClose={() =>
          setSidebarOpen(false)
        }

        onAllItems={() => {
          setSidebarOpen(false);
          setSelectedProduct(null);
          setPage("products");
        }}

        onAbout={() => {
          setSidebarOpen(false);
          setPage("about");
        }}

        onLogout={handleLogout}

        onReset={handleReset}
      />

      {/* Header */}
      <Header
        cartCount={cart.length}
        onCartClick={() =>
          setPage("cart")
        }
        onLogout={handleLogout}
        onMenuClick={() =>
          setSidebarOpen(true)
        }
      />

      <main className="p-8">

        {/* Product Details */}
        {selectedProduct ? (

          <>
            <Button
              onClick={() =>
                setSelectedProduct(null)
              }
              className="bg-gray-300 hover:bg-gray-400"
            >
              ← Back to Products
            </Button>

            <div className="bg-white rounded-lg shadow p-10 max-w-4xl mx-auto mt-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="flex justify-center">

                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-80 h-80 object-contain"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-bold mb-5">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-2xl font-bold mb-6">
                    ${selectedProduct.price.toFixed(2)}
                  </p>

                  <p className="text-gray-600 mb-8">
                    This is a high-quality{" "}
                    {selectedProduct.name}.
                    Add this product to your cart
                    and continue shopping.
                  </p>

                  {cart.some(
                    (item) =>
                      item.id === selectedProduct.id
                  ) ? (

                    <Button
                      onClick={() =>
                        removeFromCart(
                          selectedProduct.id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      Remove
                    </Button>

                  ) : (

                    <Button
                      onClick={() =>
                        addToCart(selectedProduct)
                      }
                    >
                      Add to Cart
                    </Button>

                  )}

                </div>

              </div>

            </div>
          </>

        ) : (

          <>
            {/* Heading and sorting */}
            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Products
              </h2>

              <select
                value={sortOption}
                onChange={(e) =>
                  setSortOption(e.target.value)
                }
                className="border border-gray-300 rounded px-4 py-3 bg-white cursor-pointer"
              >
                <option value="name-asc">
                  Name (A to Z)
                </option>

                <option value="name-desc">
                  Name (Z to A)
                </option>

                <option value="price-asc">
                  Price (low to high)
                </option>

                <option value="price-desc">
                  Price (high to low)
                </option>
              </select>

            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {sortedProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}

                  isInCart={cart.some(
                    (item) =>
                      item.id === product.id
                  )}

                  onAddToCart={addToCart}

                  onRemoveFromCart={
                    removeFromCart
                  }

                  onProductClick={
                    setSelectedProduct
                  }
                />

              ))}

            </div>
          </>

        )}

      </main>

    </div>
  );
}

export default Products;