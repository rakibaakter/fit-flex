// import { useEffect, useState } from "react";
import SectionTitle from "../../../../Component/SectionTitle";
import { useLoaderData } from "react-router-dom";

const Features = () => {
  const { features } = useLoaderData();
  // console.log(features);
  // const [features, setFeatures] = useState([]);

  // useEffect(() => {
  //   fetch("/features.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFeatures(data);
  //       console.log(features);
  //     });
  // }, []);

  return (
    <section className="px-4 md:px-12 lg:px-32">
      <SectionTitle value="Features" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="card rounded-none  bg-gray-600 hover:bg-red-700 hover:-translate-y-6"
          >
            <div className="card-body  mt-10 ">
              <div className="flex items-end gap-4">
                <img src={feature.icon} alt="" className="h-24 w-24" />
                <h2 className="card-title text-2xl">{feature.title}</h2>
              </div>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
