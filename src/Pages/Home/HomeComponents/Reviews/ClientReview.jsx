import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import StarRatings from "react-star-ratings";

const ClientReview = ({ review }) => {
  const { rating, details, name, image } = review;

  return (
    <SwiperSlide className="py-10 px-10  space-y-4 text-center lg:my-8 ">
      <div className="h-24 w-24 rounded-full mx-auto">
        <img src={image} alt="" className="h-24 w-24 rounded-full" />
      </div>
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        starDimension="40px"
        starSpacing="8px"
        name="rating"
      />
      <br />
      <FontAwesomeIcon icon={faQuoteLeft} className="text-7xl" />
      <p className="w-1/2 mx-auto">{details}</p>
      <h2 className="text-red-300 uppercase text-3xl">{name}</h2>
    </SwiperSlide>
  );
};

export default ClientReview;
