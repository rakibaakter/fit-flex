import { useState } from "react";
import PageBanner from "../../../Component/PageBanner";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ApplyTrainer = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const skillsArray = [
    "Yoga",
    "Pilates",
    "HIIT Workout",
    "Piloxing",
    "Aerial Yoga",
    "Cardio Kickboxing",
    "Strength Training",
    "Zumba",
    "Cycling",
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleCheckboxChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(
        selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
      );
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleApplyTrainer = (event) => {
    event.preventDefault();
    const form = event.target;
    const trainerName = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const profileImage = form.profileImage.value;
    const skill = selectedSkills;
    const availableTimePerWeek = form.availableTimePerWeek.value;
    const availableTimePerDay = form.availableTimePerDay.value;

    const trainer = {
      trainerName,
      email,
      age,
      profileImage,
      skill,
      availableTimePerWeek,
      availableTimePerDay,
    };
    // console.log(trainer);
    axiosPublic.post("/trainers", trainer).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your application has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Fit Flex | Apply Trainer</title>
      </Helmet>
      <PageBanner title="Be A Trainer" />
      <div className="bg-slate-900 py-16 w-11/12 md:w-3/4 mx-auto">
        <div className="card shrink-0 w-full  shadow-2xl text-black ">
          <form onSubmit={handleApplyTrainer} className="card-body ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user.email}
                disabled
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">Age</span>
              </label>
              <input
                type="number"
                placeholder="age"
                name="age"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">Profile Url</span>
              </label>
              <input
                type="text"
                placeholder="Profile Url"
                name="profileImage"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">Skills</span>
              </label>

              <div className="flex flex-wrap gap-4">
                {skillsArray.map((skill, index) => (
                  <div key={index} className="form-control">
                    <label className="cursor-pointer">
                      <input
                        type="checkbox"
                        name={skill}
                        checked={selectedSkills.includes(skill)}
                        onChange={() => handleCheckboxChange(skill)}
                      />
                      <span className="ml-2 text-gray-300">{skill}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  disabled
                  defaultValue={selectedSkills.join(", ")}
                  name="skills"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">
                  Available Time Per Week
                </span>
              </label>
              <input
                type="number"
                placeholder="Available Time Per Week"
                name="availableTimePerWeek"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-300">
                  Available Time Per Day
                </span>
              </label>
              <input
                type="number"
                placeholder="Available Time Per Day"
                name="availableTimePerDay"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Apply Now"
                className="btn bg-red-600 border-none outline-none text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyTrainer;
