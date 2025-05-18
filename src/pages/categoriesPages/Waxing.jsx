import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const Waxing = () => {
  const { products } = useContext(ShopContext);
  const [waxingProducts, setWaxingProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "waxing");
    setWaxingProducts(filtered);
  }, [products]);

  return (
    <div className="py-10">
      <Title text1="WAXING" text2="SERVICES" />
      {waxingProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No waxing services found.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-6">
          {waxingProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Waxing;
