import Header from "../components/Header";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

import type { Product } from "../types/Product";

type CartProps = {
  cart: Product[];
  setCart: React.Dispatch<
    React.SetStateAction<Product[]>
  >;
  setPage: (page: string) => void;
};

function Cart({
  cart,
  setCart,
  setPage,
}: CartProps) {

  // Remove product from cart
  const removeFromCart = (id: number) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== id
      )
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  // Logout
  const handleLogout = () => {
    setCart([]);
    setPage("login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <Header
        cartCount={cart.length}
        onCartClick={() => setPage("cart")}
        onLogout={handleLogout}
      />

      <main className="p-8">

        {/* Page title */}
        <h2 className="text-3xl font-bold mb-8">
          Your Cart
        </h2>

        {cart.length === 0 ? (

          /* Empty cart */
          <div className="bg-white p-8 rounded-lg shadow">

            <p className="text-lg mb-5">
              Your cart is empty.
            </p>

            <Button
              onClick={() => setPage("products")}
            >
              Continue Shopping
            </Button>

          </div>

        ) : (

          <>
            {/* Cart items */}
            <div className="space-y-4">

              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}

            </div>

            {/* Total */}
            <div className="bg-white mt-8 p-6 rounded-lg shadow">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-bold">
                  Total
                </h3>

                <p className="text-2xl font-bold">
                  ${total.toFixed(2)}
                </p>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">

              <Button
                onClick={() => setPage("products")}
                className="bg-gray-300 hover:bg-gray-400"
              >
                ← Continue Shopping
              </Button>

              <Button
                onClick={() => setPage("checkout")}
              >
                Checkout →
              </Button>

            </div>

          </>
        )}

      </main>

    </div>
  );
}

export default Cart;