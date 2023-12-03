import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WeekClass = ({ classes }) => {
  // const uniqueDays = [...new Set(classes.map((item) => item.day))];
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
  ];

  return (
    <div className="-mt-20  md:-mt-28">
      <div className="text-center ">
        <h2 className="btn border-none rounded-none rounded-t-2xl px-6 text-red-300 md:text-xl font-bold">
          Weekly Schedule
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table bg-transparent  ">
          <thead>
            <tr className=" md:text-2xl text-red-600 text-center ">
              {days.map((day) => (
                <th key={day} className="border ">
                  <p>{day}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {days.map((day) => (
                <td key={day} className="border ">
                  {classes
                    .filter((item) => item.day === day)
                    .map((classItem) => (
                      <div
                        key={classItem._id}
                        className="mb-2 w-full md:text-xl font-semibold  bg-red-300 px-2 py-2 text-center "
                      >
                        <p>{classItem.name}</p>
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeekClass;
