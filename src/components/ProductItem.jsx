import { useShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // <-- import toast here

const ProductItem = ({ id, image, name, price }) => {
  const { currency, addToCart } = useShopContext();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Stop click from triggering Link
    e.preventDefault(); // Stop Link navigation

    // Here, you should select size — for now, let's hardcode 'default' size
    const size = "default";
    addToCart(id, size);
    toast.success("Added to cart!"); // <-- Show success toast
  };

  return (
    <div className="text-gray-700 cursor-pointer">
      <Link
        onClick={() => scrollTo(0, 0)}
        to={`/product/${id}`}
        className="block"
      >
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt={name}
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </Link>

      <div className="mt-2">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-primary rounded hover:bg-primary-dark transition bdr"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
