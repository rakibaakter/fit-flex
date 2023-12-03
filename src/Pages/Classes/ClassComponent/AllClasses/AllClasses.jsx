import logoIcon from "../../../../assets/logo.png";
import ClassCard from "./ClassCard";

const AllClasses = ({ classes }) => {
  // console.log(classes);

  return (
    <div className="my-8">
      <div className="text-center pt-16 pb-8">
        <div className="flex justify-center items-center">
          <img src={logoIcon} alt="" />
          <div>
            <h2 className="uppercase  text-red-300 font-bold ml-2 text-xl md:text-4xl ">
              Fit Flex Classes
            </h2>
          </div>
          <img src={logoIcon} alt="" />
        </div>
      </div>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
        {classes.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
