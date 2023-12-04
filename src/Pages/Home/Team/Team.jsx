import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Team = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle value="Our Team" />
      <div className=" px-4 md:px-12 lg:px-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 ">
          {trainers.map((trainer) => (
            <div key={trainer._id}>
              <div className="card  flex-col shadow-xl text-gray-300 flex-grow">
                <figure>
                  <img
                    src={trainer.profileImage}
                    alt=""
                    className="h-[300px] w-full"
                  />
                </figure>

                <div className="card-body bg-red-600 -mt-24 ">
                  <h2 className="card-title">{trainer.trainerName}</h2>

                  <h2 className="font-medium">
                    Experience : {trainer.yearsOfExperience} Years+
                  </h2>
                </div>
                <div className="flex gap-2  text-red-600 bg-black w-full py-2 text-xl justify-center bottom-0">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaYoutube />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
