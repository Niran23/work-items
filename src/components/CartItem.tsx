import Button from "./Button";

type CartItemType = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type CartItemProps = {
  item: CartItemType;
  onRemove: (id: number) => void;
};

function CartItem({
  item,
  onRemove,
}: CartItemProps) {
  return (
    <div className="bg-white p-5 rounded-lg flex items-center justify-between shadow">

      <div className="flex items-center gap-5">

        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-contain"
          />
        )}

        <div>
          <h3 className="text-lg font-bold">
            {item.name}
          </h3>

          <p className="text-gray-600">
            ${item.price.toFixed(2)}
          </p>
        </div>

      </div>

      <Button
        onClick={() => onRemove(item.id)}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        Remove
      </Button>

    </div>
  );
}

export default CartItem;