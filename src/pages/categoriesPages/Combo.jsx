import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const Combo = () => {
  const { products } = useContext(ShopContext);
  const [comboProducts, setComboProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "combo");
    setComboProducts(filtered);
  }, [products]);

  return (
    <div className="py-10">
      <Title text1="COMBO" text2="SERVICES" />
      {comboProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No combo services found.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-6">
          {comboProducts.map((item, index) => (
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

export default Combo;
