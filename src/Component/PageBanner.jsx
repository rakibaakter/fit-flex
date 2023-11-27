import bannerImg from "../assets/banner2.jpg";
import SectionTitle from "./SectionTitle";

const PageBanner = ({ title }) => {
  return (
    <div
      className="hero min-h-[50vh]"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <SectionTitle value={title} />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
