import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const TrainerDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: trainer = {} } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/trainers/${id}`);
      //   console.log(result);
      return result.data;
    },
  });

  console.log(trainer);

  return (
    <div className="bg-slate-900 py-32 w-11/12 md:w-3/4 mx-auto">
      <div className="flex justify-center">
        <img
          className="h-48 w-48 object-cover"
          src={trainer.profileImage}
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold  my-2">{trainer.trainerName}</h1>
        <p>{trainer.email}</p>
      </div>
      <div className="flex gap-2 text-red-600 py-2 text-xl justify-center ">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="grid lg:grid-cols-2 w-3/4 mx-auto text-xl gap-4 my-4">
        <h3>Age : {trainer.age} years</h3>
        <h3>Experience : {trainer.yearsOfExperience} years</h3>
        <h3>
          Skill :{" "}
          {trainer.skills?.map((skill, ind) => (
            <li key={ind}>{skill} </li>
          ))}
        </h3>
        <h3>Total Slot : {trainer.totalSlots} per week</h3>
        <h3>Available Time Per Day : {trainer.availableTimePerDay} times</h3>
        <h3>Available Time Per Week : {trainer.availableTimePerWeek} times</h3>
      </div>
      <div className="w-3/4 mx-auto my-4">
        <p className="text-xl mb-2">Slot Schedule:</p>
        {trainer && trainer.availableTimeSlots && (
          <div className="overflow-x-auto">
            <table className="border">
              <thead className="border">
                <tr>
                  <th className="border">Day</th>
                  <th className="border">Time Slots</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(trainer.availableTimeSlots).map(
                  ([day, slots]) => (
                    <tr key={day} className="border">
                      <td className="border">{day}</td>
                      <td>{slots.join(", ")}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainerDetails;
