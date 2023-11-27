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
    <SwiperSlide className="px-10  space-y-4 text-center ">
      <div className="bg-slate-900 px-4 py-8 md:mx-20 lg:mx-48">
        <div className="h-12 w-12 md:h-24 md:w-24 rounded-full mx-auto">
          <img
            src={image}
            alt=""
            className="h-12 w-12 md:h-24 md:w-24 rounded-full "
          />
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          starDimension="24px"
          starSpacing="2px"
          name="rating"
        />
        <br />
        <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl md:text-7xl" />
        <p className="w-full md:w-1/2 mx-auto">{details}</p>
        <h2 className="text-red-300 uppercase text-xl md:text-3xl">{name}</h2>
      </div>
    </SwiperSlide>
  );
};

export default ClientReview;
