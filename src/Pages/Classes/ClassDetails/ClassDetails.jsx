import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import PrimaryButton from "../../../Component/PrimaryButton";
import { Helmet } from "react-helmet-async";

const ClassDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const axiosPublic = useAxiosPublic();
  const [selectedClass, setSelectedClass] = useState({});

  useEffect(() => {
    axiosPublic.get(`/classes/${id}`).then((res) => {
      //   console.log(res);
      setSelectedClass(res.data);
    });
  }, [axiosPublic, id]);

  const {
    name,
    image,
    day,
    details,
    members,
    trainer,
    trainerId,
    intensity,
    group,
    feel,
    price,
    time,
  } = selectedClass;

  //   const { data } = useQuery({
  //     queryKey: ["selectedClass"],
  //     queryFn: async () => {
  //       const result = await axiosPublic.get(`/classes/${id}`);
  //       return result.data;
  //     },
  //   });
  //   console.log(data);

  return (
    <div>
      <Helmet>
        <title>Fit Flex | Class Details</title>
      </Helmet>
      <img className="md:h-[80vh] w-full" src={image} alt="" />
      <div className="px-4 md:px-12 lg:px-32">
        <SectionTitle value={name} />
        <div className="space-y-4 mb-12">
          <h3 className="text-2xl font-bold ">Details</h3>
          <p>{details}</p>
          <div className="text-gray-400">
            <div className="grid grid-cols-2 lg:grid-cols-4 mb-4">
              <div>
                <h2 className="font-bold">Intensity</h2>
                <p className="text-2xl my-2 ">{intensity}</p>
              </div>
              <div>
                <h2 className="font-bold">Feel</h2>
                <p className="text-2xl my-2 ">{feel}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 mb-4">
              <div>
                <h2 className="font-bold"> Joined Members</h2>
                <p className="text-2xl my-2">{members}</p>
              </div>
              <div>
                <h2 className="font-bold">Group</h2>
                <p className="text-2xl my-2 ">{group}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 mb-4">
              <div>
                <h2 className="font-bold"> Day</h2>
                <p className="text-2xl my-2 ">{day}</p>
              </div>
              <div>
                <h2 className="font-bold">Time</h2>
                <p className="text-2xl my-2 ">{time}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 mb-4">
              <div>
                <h2 className="font-bold"> Trainer</h2>
                <p className="text-2xl my-2 ">{trainer}</p>
              </div>
              <div>
                <h2 className="font-bold">Price</h2>
                <p className="text-2xl my-2 ">${price} /month</p>
              </div>
            </div>
          </div>
          <Link to={`/trainer-details/${trainerId}`}>
            <PrimaryButton value="Join Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
