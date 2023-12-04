import loginImg from "../../assets/login.png";
import bgImg from "../../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // const location = useLocation();

  const {
    register,
    formState: { errors, reset },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        updateUser(data.name, data.photoUrl)
          .then((res) => {
            const newUser = {
              name: data.name,
              email: data.email,
            };
            axiosPublic
              .post("/users", newUser)
              .then((res) => {
                if (res.data.insertedId) {
                  console.log("added to database");
                  Swal.fire({
                    title: "Sign Up Successfully",
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
                  navigate("/");
                }
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.message,
                });
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <>
      <div
        className="hero min-h-screen p-32"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center ">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="text-center lg:text-left">
                <img src={loginImg} alt="" />
              </div>
              <div className="card shrink-0 w-full max-w-md text-white">
                <h1 className="text-4xl font-bold">Sign Up Now!</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      {...register("name", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.name?.type === "required" && (
                      <p className="text-red-600"> Name is required</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url (optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="photo url"
                      name="photoUrl"
                      {...register("photoUrl")}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-600"> Email is required</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered text-black"
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
                      value="Sign Up"
                      className="btn bg-red-600 text-white "
                    />
                  </div>
                  <label className="  text-center my-2 text-red-300">
                    Already have an acoount?{" "}
                    <Link to="/login" className="font-bold">
                      Please Log In!
                    </Link>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
