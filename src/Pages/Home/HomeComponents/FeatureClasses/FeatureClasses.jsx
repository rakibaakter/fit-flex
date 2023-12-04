import { useEffect, useState } from "react";
import SectionTitle from "../../../../Component/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import AllClasses from "../../../Classes/ClassComponent/AllClasses/AllClasses";

const FeatureClasses = () => {
  const axiosPublic = useAxiosPublic();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axiosPublic.get("/classes").then((res) => {
      // const
      setClasses(res.data.slice(0, 6));
    });
  }, [axiosPublic]);

  return (
    <div className=" px-4 md:px-12 lg:px-32">
      <SectionTitle value="Feature Classes" />
      <AllClasses classes={classes} />
    </div>
  );
};

export default FeatureClasses;
