import { Link } from "react-router-dom";

const ClassInfo = ({ classItem }) => {
  const { _id, name, description } = classItem;

  return (
    <div className="absolute bottom-0">
      <div className="card-body bg-red-600 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/class-details/${_id}`}>
            <button className="btn text-red-300">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
