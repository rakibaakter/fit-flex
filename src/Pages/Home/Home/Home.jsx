import Banner from "../HomeComponents/Banner/Banner";
import Features from "../HomeComponents/Features/Features";
import Newsletter from "../HomeComponents/Newsletter/Newsletter";
import Reviews from "../HomeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <div className="space-y-32">
      <Banner />
      <Features />
      <Reviews />
      <Newsletter />
    </div>
  );
};

export default Home;
