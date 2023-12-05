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
  console.log(trainers);

  return (
    <div>
      <section>
        <SectionTitle value="All Trainers" />
        <h2 className="uppercase md:text-2xl font-medium r mb-12 ">
          Total Trainers : {trainers.length}
        </h2>

        <div>
          <div className="overflow-x-auto rounded-t-lg">
            <table className="table ">
              {/* head */}
              <thead className="bg-red-300 border">
                <tr>
                  <th className="border"></th>
                  <th className="border">Name</th>
                  <th className="border">Email</th>
                  <th className="border">Payment</th>
                </tr>
              </thead>
              <tbody>
                {trainers.map((trainer, index) => (
                  <tr key={trainer._id} className="border">
                    <th className="border">
                      <p>{index + 1}</p>
                    </th>
                    <td className="border">
                      <h2 className="font-medium">{trainer.trainerName}</h2>
                    </td>
                    <td className="border">
                      <h2 className="font-medium">{trainer.email}</h2>
                    </td>
                    <th className="border">
                      <button className="btn ">Pay</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTrainers;
