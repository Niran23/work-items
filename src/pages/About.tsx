import Button from "../components/Button";

type AboutProps = {
  setPage: (page: string) => void;
};

function About({ setPage }: AboutProps) {

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-[#092b26] text-white px-8 py-6 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Swag Labs
        </h1>

        <Button
          onClick={() => setPage("products")}
          className="bg-gray-200 hover:bg-gray-300 text-black"
        >
          Back to Products
        </Button>

      </header>

      {/* Main content */}
      <main className="p-8">

        <div className="max-w-4xl mx-auto">

          {/* About Card */}
          <div className="bg-white rounded-lg shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-6">
              About Sauce Labs
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              Sauce Labs provides tools and platforms
              that help teams build, test, and deliver
              high-quality web and mobile applications.
            </p>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              This page is part of our SauceDemo replica
              project. It demonstrates how different
              pages can be connected using React state
              and props.
            </p>

            {/* Application Features */}
            <div className="border-t pt-6">

              <h3 className="text-xl font-bold mb-5">
                Our Demo Application
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-gray-100 p-5 rounded">
                  <h4 className="font-bold mb-2">
                    🛍 Products
                  </h4>

                  <p className="text-gray-600">
                    Browse and sort products.
                  </p>
                </div>

                <div className="bg-gray-100 p-5 rounded">
                  <h4 className="font-bold mb-2">
                    🛒 Shopping Cart
                  </h4>

                  <p className="text-gray-600">
                    Add and remove products.
                  </p>
                </div>

                <div className="bg-gray-100 p-5 rounded">
                  <h4 className="font-bold mb-2">
                    💳 Checkout
                  </h4>

                  <p className="text-gray-600">
                    Enter customer information
                    and review the order.
                  </p>
                </div>

                <div className="bg-gray-100 p-5 rounded">
                  <h4 className="font-bold mb-2">
                    ✅ Order Success
                  </h4>

                  <p className="text-gray-600">
                    Complete the shopping flow.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Back button */}
          <div className="mt-8">

            <Button
              onClick={() => setPage("products")}
            >
              ← Back to Products
            </Button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default About;