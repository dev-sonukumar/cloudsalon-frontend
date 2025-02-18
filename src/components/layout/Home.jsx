import ScrollDocument from "@/Pages/ScrollDocument";
import HappyClientServicesCount from "../../Pages/HappyClientServiceCount";
import Hero from "../../Pages/Hero";
import ImageSlider from "../../Pages/ImageSlider";
import OurServices from "../../Pages/OurServices";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
      <ImageSlider />
      <ScrollDocument />
      {/* <PostPage /> */}
      {/* <Post /> */}
    </div>
  );
};

export default Home;
