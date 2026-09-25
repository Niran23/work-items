type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductDetailsProps = {
  product: Product;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setPage: (page: string) => void;
};

function ProductDetails({
  product,
  cart,
  setCart,
  setPage,
}: ProductDetailsProps) {

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-[#092b26] text-white px-8 py-6 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Swag Labs
        </h1>

        <button
          onClick={() => setPage("cart")}
          className="text-2xl cursor-pointer"
        >
          🛒

          {cart.length > 0 && (
            <span className="ml-2 text-sm bg-red-500 px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </button>

      </header>

      {/* Product Details */}
      <main className="p-8">

        <button
          onClick={() => setPage("products")}
          className="bg-gray-300 px-5 py-3 rounded font-bold cursor-pointer mb-8"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-lg shadow p-10 max-w-4xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-80 h-80 object-contain"
              />
            </div>

            {/* Details */}
            <div>

              <h2 className="text-3xl font-bold mb-5">
                {product.name}
              </h2>

              <p className="text-2xl font-bold text-gray-700 mb-6">
                ${product.price}
              </p>

              <p className="text-gray-600 mb-8">
                This is a high-quality {product.name}.
                Add this product to your cart and continue
                shopping.
              </p>

              <button
                onClick={addToCart}
                className="w-full bg-[#3ddc97] py-4 rounded font-bold cursor-pointer hover:bg-[#32c985]"
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default ProductDetails;