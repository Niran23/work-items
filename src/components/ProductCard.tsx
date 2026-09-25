import Button from "./Button";

import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
  isInCart: boolean;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (id: number) => void;
  onProductClick: (product: Product) => void;
};

function ProductCard({
  product,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
  onProductClick,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-full">

      {/* Product Image */}
      <div
        onClick={() => onProductClick(product)}
        className="h-56 flex items-center justify-center cursor-pointer mb-6"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1">

        {/* Product Name */}
        <h3
          onClick={() => onProductClick(product)}
          className="text-lg font-bold text-gray-800 cursor-pointer hover:text-green-600 min-h-[56px]"
        >
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-700 mt-4 mb-6">
          ${product.price.toFixed(2)}
        </p>

        {/* Button */}
        <div className="mt-auto">

          {isInCart ? (

            <Button
              onClick={() =>
                onRemoveFromCart(product.id)
              }
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Remove
            </Button>

          ) : (

            <Button
              onClick={() =>
                onAddToCart(product)
              }
              className="w-full"
            >
              Add to Cart
            </Button>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;