import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const HairStyle = () => {
  const { products } = useContext(ShopContext);
  const [hairStyleProducts, setHairStyleProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "hair-style");
    setHairStyleProducts(filtered);
  }, [products]);

  return (
    <div className="pt-10 border-t">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1="HAIR" text2="STYLE" />
      </div>

      {hairStyleProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {hairStyleProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          No hair-style products found.
        </div>
      )}
    </div>
  );
};

export default HairStyle;
