import Banner from "../HomeComponents/Banner/Banner";
import Features from "../HomeComponents/Features/Features";
import Reviews from "../HomeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <div className="space-y-32">
      <Banner />
      <Features />
      <Reviews />
    </div>
  );
};

export default Home;
