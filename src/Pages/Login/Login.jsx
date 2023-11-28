import loginImg from "../../assets/login.png";
import bgImg from "../../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
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
              <button className="btn-outline bg-transparent text-white border boder-white rounded-lg py-3 mt-12 w-[85%] mx-auto ">
                <p className="flex justify-center items-center gap-2">
                  <span>Sign In With Google</span>
                  <FcGoogle className="text-2xl" />
                </p>
              </button>
              <div className="mt-6">
                <p>---Or Sign In By Email Password---</p>
              </div>
              <form className="card-body space-y-6">
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-slate-900"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-slate-900"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn  btn-ghost bg-red-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
