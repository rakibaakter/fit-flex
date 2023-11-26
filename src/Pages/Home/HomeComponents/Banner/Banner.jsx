import bannerImg from "../../../../assets/banner.jpg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../Component/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content absolute top-1/4 lg:top-1/3 left-4 md:left-28 ">
        <div className="max-w-3xl">
          <h1 className="mb-3 md:mb-5 text-2xl md:text-4xl font-bold">
            Join for fitness adventure !
          </h1>
          <div className="pb-2 md:pb-7 md:text-xl md:space-y-3">
            <p>
              Welcome to{" "}
              <span className="text-xl font-semibold text-red-500">
                Fit Flex
              </span>
              , where your fitness journey begins and transformations happen.
              Our mission is to empower you to live a healthier and happier life
              through tailored workout programs, expert guidance, and a
              supportive community.
            </p>
            <p>Start your Fit Flex experience today.</p>
          </div>
          <Link to="/classes">
            <PrimaryButton value="Explore Our Classes" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
