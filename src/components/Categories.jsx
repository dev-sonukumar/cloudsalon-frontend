import { categories } from "../assets/assets";
import { useShopContext } from "../context/ShopContext";
import Title from "./Title";

const Categories = () => {
  const { navigate } = useShopContext();

  return (
    <div className="mt-5 mb-16">
      <div className="text-center py-8 text-3xl">
        <Title text1={"OUR"} text2={"CATEGORIES"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover a wide range of salon services tailored to your beauty needs
          — from skincare and haircare and more at your doorstep.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2  flex flex-col justify-center items-center border"
            // style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-105 transition max-w-full "
            />
            <p className="text-sm font-medium ">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
