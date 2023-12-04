import { Helmet } from "react-helmet-async";
import About from "../HomeComponents/About/About";
import Banner from "../HomeComponents/Banner/Banner";
import Features from "../HomeComponents/Features/Features";
import Newsletter from "../HomeComponents/Newsletter/Newsletter";
import Reviews from "../HomeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fit Flex | Home</title>
      </Helmet>
      <div className="space-y-24">
        <Banner />
        <About />
        <Features />
        <Reviews />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
