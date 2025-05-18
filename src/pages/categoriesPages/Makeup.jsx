import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";

const Makeup = () => {
  const { products } = useContext(ShopContext);
  const [makeupProducts, setMakeupProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "makeup");
    setMakeupProducts(filtered);
  }, [products]);

  return (
    <div className="pt-10 border-t">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1="MAKEUP" text2="" />
      </div>

      {makeupProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {makeupProducts.map((item, index) => (
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
          No makeup products found.
        </div>
      )}
    </div>
  );
};

export default Makeup;
