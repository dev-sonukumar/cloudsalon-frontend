import { useShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // <-- import toast here

const ProductItem = ({ id, image, name, price, category }) => {
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
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white w-full   border- ">
      <Link
        onClick={() => scrollTo(0, 0)}
        to={`/product/${id}`}
        className="block"
      >
        <div className="group cursor-pointer flex items-center justify-center overflow-hidden  rounded-lg mt-2 border">
          <img
            className="group-hover:scale-105 transition object-cover object-center  h-[100px] lg:h-[200px]"
            src={image[0]}
            alt={name}
          />
        </div>
        <div>
          <p>{category}</p>
          <p className="pt-3 pb-1 text-sm">{name}</p>
          <p className="text-sm font-medium">
            {currency}
            {price}
          </p>
        </div>
      </Link>

      <div className="mt-2 flex flex-col gap-3">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-[var(--color-primary-dull)] hover:bg-[var(--color-primary)] rounded-lg hover:bg-primary-dark transition border"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToCart}
          className="hidden px-4 py-2 bg-primary rounded hover:bg-primary-dark transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
