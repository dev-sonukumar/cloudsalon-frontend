import Gallery from "@/Pages/Gallery";
import OurServices from "../../Pages/OurServices";
import CustomerReviews from "@/Pages/CustomerReviews";
import Hero from "@/Pages/Hero";
import HappyClientServicesCount from "@/Pages/Hero/HappyClientServiceCount";
import HeroAbout from "@/Pages/Hero/HeroAbout";
import OurApproach from "@/Pages/Hero/OurApproach";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
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
