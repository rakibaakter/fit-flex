import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllTrainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const result = await axiosPublic.get("/trainers");
      return result.data;
    },
  });
  //   console.log(trainers);

  return (
    <div>
      <SectionTitle value="All Trainers" />
    </div>
  );
};

export default AllTrainers;
