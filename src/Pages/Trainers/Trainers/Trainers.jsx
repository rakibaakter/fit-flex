import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PageBanner from "../../../Component/PageBanner";
import TrainerCard from "../TrainerComponent/TrainerCard";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Component/PrimaryButton";
import { Helmet } from "react-helmet-async";

const Trainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  //   console.log(trainers);

  return (
    <div className="text-center mb-16">
      <Helmet>
        <title>Fit Flex | Trainers</title>
      </Helmet>
      <PageBanner title="Our Trainers" />
      <div className=" px-4 md:px-12 lg:px-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 ">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer} />
          ))}
        </div>
        <Link to="/apply-trainer">
          <PrimaryButton value="Be A Trainer " />
        </Link>
      </div>
    </div>
  );
};

export default Trainers;
