import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import CartPage from "./CartPage";

const HomePage = () => {
  return (
    <section className="container">
      <div className="p-4 grid grid-cols-1 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <CartPage />
    </section>
  );
};

export default HomePage;
