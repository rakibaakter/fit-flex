import {
  FaFacebook,
  FaHandPointRight,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  const {
    _id,
    profileImage,
    trainerName,
    yearsOfExperience,
    availableTimeSlots,
    totalSlots,
  } = trainer;

  const availableDay = [];

  for (let prop in availableTimeSlots) {
    if (
      Array.isArray(availableTimeSlots[prop]) &&
      availableTimeSlots[prop].length > 0
    ) {
      availableDay.push(prop);
    }
  }
  console.log(availableDay);

  return (
    <div>
      <div className="card  flex-col shadow-xl text-gray-300 flex-grow">
        <figure>
          <img src={profileImage} alt="" className="h-[600px] w-full" />
        </figure>
        <div className="flex gap-2 absolute text-red-600 bg-black w-full py-2 text-xl justify-center top-1/2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="card-body bg-red-600 -mt-24 ">
          <h2 className="card-title">{trainerName}</h2>

          <h2 className="font-medium">
            Experience : {yearsOfExperience} Years+
          </h2>
          <h2 className="font-medium">Total Slot : {totalSlots} availaible</h2>
          <p>
            Available Day :
            <p
              className="grid
             grid-cols-2"
            >
              {availableDay?.map((day, ind) => (
                <p key={ind} className="mr-2">
                  {day}
                </p>
              ))}
            </p>
          </p>

          <div className="card-actions flex items-center text-xl btn text-red-300 mt-4">
            <FaHandPointRight />
            <Link to={`/trainer-details/${_id}`}>Know More...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
