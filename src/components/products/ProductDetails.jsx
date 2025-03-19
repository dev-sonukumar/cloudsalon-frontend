import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center py-10 text-lg text-gray-500">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 text-lg">
        Error: {error}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="block group"
        >
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full h-64 mb-4 overflow-hidden rounded-lg bg-gray-50">
              <img
                src={product.images?.[0]?.url || "/placeholder-image.jpg"}
                alt={product.images?.[0]?.altText || product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">
              {product.name || "Untitled Product"}
            </h3>

            <p className="text-gray-600 font-semibold text-sm tracking-tight">
              $ {Number(product.price).toFixed(2)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
