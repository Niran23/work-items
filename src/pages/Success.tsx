import Button from "../components/Button";

type SuccessProps = {
  setPage: (page: string) => void;
  clearCart: () => void;
};

function Success({
  setPage,
  clearCart,
}: SuccessProps) {

  const handleBackToProducts = () => {
    clearCart();
    setPage("products");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-[#092b26] text-white px-8 py-6">
        <h1 className="text-2xl font-bold">
          Swag Labs
        </h1>
      </header>

      {/* Success Content */}
      <main className="flex justify-center items-center p-8 min-h-[calc(100vh-88px)]">

        <div className="bg-white rounded-lg shadow-lg p-10 text-center max-w-xl w-full">

          {/* Success Icon */}
          <div className="text-6xl mb-6">
            ✅
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4">
            Thank you for your order!
          </h2>

          {/* Message */}
          <p className="text-gray-600 text-lg mb-3">
            Your order has been placed successfully.
          </p>

          <p className="text-gray-500 mb-8">
            We appreciate your purchase.
          </p>

          {/* Button */}
          <Button
            onClick={handleBackToProducts}
            className="w-full"
          >
            Back to Products
          </Button>

        </div>

      </main>

    </div>
  );
}

export default Success;