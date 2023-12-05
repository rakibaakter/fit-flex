import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Component/SectionTitle";

const AllSubscriber = () => {
  const axiosPublic = useAxiosPublic();

  const { data: subscribers = [] } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const result = await axiosPublic.get("/subscribers");
      return result.data;
    },
  });
  console.log(subscribers);

  return (
    <div>
      <section className="pb-12">
        <SectionTitle value="All Subscribers" />
        <h2 className="uppercase md:text-2xl font-medium r mb-12 ">
          Total Subscribers : {subscribers.length}
        </h2>

        <div>
          <div className="overflow-x-auto rounded-t-lg">
            <table className="table ">
              {/* head */}
              <thead className="bg-red-300 ">
                <tr className="border">
                  <th className="border"></th>
                  <th className="border">Email</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber, index) => (
                  <tr key={subscriber._id}>
                    <th className="border">
                      <p>{index + 1}</p>
                    </th>
                    <td className="border">
                      <h2 className="font-medium">{subscriber.email}</h2>
                    </td>
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

export default AllSubscriber;
