import HappyClientServicesCount from "../../Pages/HappyClientServiceCount";
import OurServices from "../../Pages/OurServices";
import CustomerReviews from "@/Pages/CustomerReviews";
import Hero from "@/Pages/Hero";

// import CartPage from "@/Pages/product/CartPage";
// import ProductPage from "@/Pages/product/ProductPage";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
      <CustomerReviews />
      {/* <ProductPage /> */}
      {/* <CartPage /> */}

      {/* <PostPage /> */}
      {/* <Post /> */}
    </div>
  );
};

export default Home;
