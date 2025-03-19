import Gallery from "@/Pages/Gallery";
import CustomerReviews from "@/Pages/CustomerReviews";
import Hero from "@/Pages/Hero";
import HappyClientServicesCount from "@/Pages/Hero/HappyClientServiceCount";
import HeroAbout from "@/Pages/Hero/HeroAbout";
import OurApproach from "@/Pages/Hero/OurApproach";
import OurServices from "@/Pages/OurServices";
import ProductDetails from "@/components/products/ProductDetails";
import ProductGrid from "@/components/products/ProductDetails";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductDetails />
      <ProductGrid />
      <OurServices />
      <HeroAbout />
      <OurApproach />
      <HappyClientServicesCount />
      <Gallery />
      <CustomerReviews />
    </div>
  );
};

export default Home;
