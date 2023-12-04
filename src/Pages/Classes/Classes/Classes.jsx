import { useEffect, useState } from "react";
import PageBanner from "../../../Component/PageBanner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import WeekClass from "../ClassComponent/WeekClass/WeekClass";
import AllClasses from "../ClassComponent/AllClasses/AllClasses";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const axiosPublic = useAxiosPublic();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axiosPublic.get("/classes").then((res) => {
      // console.log(res.data);
      setClasses(res.data);
    });
  }, [axiosPublic]);

  // const { data: classes = [] } = useQuery({
  //   queryKey: ["classes"],
  //   queryFn: async () => {
  //     const result = await axiosPublic.get("/classes");
  //     return result.data;
  //   },
  // });

  return (
    <div>
      <Helmet>
        <title>Fit Flex | Classes</title>
      </Helmet>
      <PageBanner title="Our Classes" />
      <div className=" px-4 md:px-12 lg:px-32">
        <WeekClass classes={classes} />
        <AllClasses classes={classes} />
      </div>
    </div>
  );
};

export default Classes;
