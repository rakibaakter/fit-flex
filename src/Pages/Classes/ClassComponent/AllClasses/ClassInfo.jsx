import { Link } from "react-router-dom";

const ClassInfo = ({ classItem }) => {
  const { _id, name, price, intensity, feel } = classItem;

  return (
    <div className="absolute bottom-0 w-full ">
      <div className="card-body w-full bg-red-300 text-red-600 items-center text-center font-medium">
        <h2 className="card-title">{name}</h2>
        <p> Feel : {feel}</p>
        <p>Intensity : {intensity}</p>
        <h2 className="card-title">Price : {price}</h2>
        <div className="card-actions">
          <Link to={`/class-details/${_id}`}>
            <button className="btn text-red-600">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
