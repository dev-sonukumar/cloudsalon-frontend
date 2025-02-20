import HappyClientServicesCount from "../../Pages/HappyClientServiceCount";
import OurServices from "../../Pages/OurServices";
import CustomerReviews from "@/Pages/CustomerReviews";
import Hero from "@/Pages/Hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
      <CustomerReviews />
    </div>
  );
};

export default Home;
