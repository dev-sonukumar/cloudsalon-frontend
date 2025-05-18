import React from "react";
// import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import MainBanner from "../components/MainBanner";
import BottomBanner from "../components/BottomBanner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
      {/* <Hero /> */}
      <LatestCollection />
      <BottomBanner />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
