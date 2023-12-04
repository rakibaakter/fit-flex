import loginImg from "../../assets/login.png";
import bgImg from "../../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Swal.fire({
          title: "user logged in ",
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const hangleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const newUser = {
          email: result.user.email,
          name: result.user.displayName,
        };
        console.log(newUser);
        axiosPublic
          .post("/users", newUser)
          .then((res) => {
            console.log(res);
            if (res.data.insertedId) {
              console.log("added to database");
            }
          })
          .catch((error) => {
            console.log(error);
          });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  return (
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
              <h1 className="text-4xl font-bold">Sign In Now!</h1>
              <button
                onClick={hangleGoogleSignIn}
                className="btn-outline bg-transparent text-white border boder-white rounded-lg py-3 mt-12 w-[85%] mx-auto "
              >
                <p className="flex justify-center items-center gap-2">
                  <span>Sign In With Google</span>
                  <FcGoogle className="text-2xl" />
                </p>
              </button>
              <div className="mt-6">
                <p>---Or Sign In By Email Password---</p>
              </div>
              <form onSubmit={handleLogin} className="card-body ">
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text text-gray-300">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered text-black"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="submit"
                    value="Log In"
                    className="btn bg-red-600 text-white border-none"
                  />
                </div>
                <label className="  text-center my-2 text-red-300">
                  New Here?{" "}
                  <Link to="/sign-up" className="font-bold">
                    Create a New Account
                  </Link>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
