import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Categories from "../components/Categories";
import MainBanner from "../components/MainBanner";
import BottomBanner from "../components/BottomBanner";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
      <LatestCollection />
      <BottomBanner />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
