import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.jpg";
import PrimaryButton from "../../Component/PrimaryButton";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="h-screen bg-zinc-900 flex flex-col items-center "
      id="error-page"
    >
      <div className="text-center">
        <img className="md:w-1/2 lg:w-1/3 mx-auto" src={errorImg} alt="" />
        <Link to="/">
          <PrimaryButton value="Back to Home" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
