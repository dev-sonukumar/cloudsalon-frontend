import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const Bleach = () => {
  const { products } = useContext(ShopContext);
  const [bleach, setBleach] = useState([]);
  const [dtan, setDTan] = useState([]);
  const [cleanup, setCleanUp] = useState([]);

  useEffect(() => {
    setBleach(products.filter((item) => item.category === "bleach"));
    setDTan(products.filter((item) => item.category === "D-tan"));
    setCleanUp(products.filter((item) => item.category === "Clean-up"));
  }, [products]);

  const renderCategory = (title, items) => (
    <div className="mb-12">
      <Title text1={title.toUpperCase()} text2="SERVICES" />
      {items.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No {title.toLowerCase()} services found.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-6">
          {items.map((item) => (
            <ProductItem
              key={item._id}
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

  return (
    <div className="py-10">
      {renderCategory("Bleach", bleach)}
      {renderCategory("D-tan", dtan)}
      {renderCategory("Clean-up", cleanup)}
    </div>
  );
};

export default Bleach;
