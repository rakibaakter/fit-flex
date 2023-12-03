import { useState } from "react";
import ClassInfo from "./ClassInfo";

const ClassCard = ({ classItem }) => {
  const { name, image } = classItem;
  console.log(classItem);
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`relative card bg-slate-900 shadow-slate-600 shadow-xl ${
        isShow ? "hover:cursor-pointer" : ""
      }`}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <figure>
        <img src={image} alt="" className="w-full h-[500px] object-fill " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
      </div>
      {isShow && <ClassInfo classItem={classItem} />}
    </div>
  );
};

export default ClassCard;
