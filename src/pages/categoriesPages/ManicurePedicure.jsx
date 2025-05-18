import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const ManicurePedicure = () => {
  const { products } = useContext(ShopContext);
  const [manicureProducts, setManicureProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (item) => item.category === "manicure-pedicure"
    );
    setManicureProducts(filtered);
  }, [products]);

  return (
    <div className="py-10">
      <Title text1="MANICURE" text2="PEDICURE" />
      {manicureProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No manicure-pedicure services found.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-6">
          {manicureProducts.map((item, index) => (
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

export default ManicurePedicure;
