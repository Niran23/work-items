import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
};

function Practice() {
  const products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "Headphones",
      price: 2500,
    },
    {
      id: 3,
      name: "T-Shirt",
      price: 800,
    },
    {
      id: 4,
      name: "Shoes",
      price: 2200,
    },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  function removeFromCart(productId: number) {
    setCart(
      cart.filter((item) => item.id !== productId)
    );
  }

  function increaseQuantity(productId: number) {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          🛒 My Shopping App
        </h1>

        <p className="text-lg font-semibold">
          Cart Items: {cart.length}
        </p>
      </div>

      {/* Products */}
      <h2 className="text-2xl font-bold mb-4">
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-4">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                removeFromCart(product.id)
              }
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer ml-2"
            >
              Remove
            </button>
          </div>
        ))}

      </div>

      {/* Cart */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          🛒 Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="font-bold">
                  {item.name}
                </p>

                <p className="text-gray-600">
                  ₹{item.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="bg-gray-300 px-3 py-1 rounded cursor-pointer"
                >
                  −
                </button>

                <span className="font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  className="bg-gray-300 px-3 py-1 rounded cursor-pointer"
                >
                  +
                </button>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Practice;