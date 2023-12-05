import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { user } = useAuth();
  //   console.log(user);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    formState: { errors, reset },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const newUser = {
      name: data.name,
      photoUrl: data.photoUrl,
    };
    axiosPublic
      .patch("/users", newUser)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Profile Updated Successfully",
            showClass: {
              popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `,
            },
            hideClass: {
              popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SectionTitle value="Profile Setting" />
      <div className="card shrink-0 w-full max-w-md text-white">
        <h1 className="text-4xl font-bold">Sign Up Now!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-300">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user.displayName}
              {...register("name", { required: true })}
              className="input input-bordered text-black"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600"> Name is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-300">
                Photo Url (optional)
              </span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photoUrl"
              defaultValue={user.photoUrl}
              {...register("photoUrl")}
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-300">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user.email}
              disabled
              name="email"
              className="input input-bordered text-black"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600"> Email is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered text-black "
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600"> Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600"> at least 6 character</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600"> Must be in 12 characters</p>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Update Now"
              className="btn bg-red-600 text-white "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
