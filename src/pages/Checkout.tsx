import { useState } from "react";

import Button from "../components/Button";

import type { Product } from "../types/Product";

type CheckoutProps = {
  cart: Product[];
  setPage: (page: string) => void;
};

function Checkout({
  cart,
  setPage,
}: CheckoutProps) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [error, setError] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleFinish = () => {

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      postalCode.trim() === ""
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    setError("");
    setPage("success");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-[#092b26] text-white px-8 py-6">
        <h1 className="text-2xl font-bold">
          Swag Labs
        </h1>
      </header>

      <main className="p-8 max-w-4xl mx-auto">

        {/* Page title */}
        <h2 className="text-3xl font-bold mb-8">
          Checkout
        </h2>

        {/* Customer Information */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">

          <h3 className="text-xl font-bold mb-5">
            Customer Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              className="border border-gray-300 rounded p-3 outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              className="border border-gray-300 rounded p-3 outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) =>
                setPostalCode(e.target.value)
              }
              className="border border-gray-300 rounded p-3 outline-none focus:border-green-500"
            />

          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 mt-4">
              {error}
            </p>
          )}

        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">

          <h3 className="text-xl font-bold mb-5">
            Order Summary
          </h3>

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between border-b pb-4"
              >

                <span>
                  {item.name}
                </span>

                <span className="font-semibold">
                  ${item.price.toFixed(2)}
                </span>

              </div>

            ))}

          </div>

          {/* Total */}
          <div className="flex justify-between mt-6 text-xl font-bold">

            <span>
              Total
            </span>

            <span>
              ${total.toFixed(2)}
            </span>

          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">

          <Button
            onClick={() => setPage("cart")}
            className="bg-gray-300 hover:bg-gray-400"
          >
            ← Back to Cart
          </Button>

          <Button
            onClick={handleFinish}
          >
            Finish
          </Button>

        </div>

      </main>

    </div>
  );
}

export default Checkout;