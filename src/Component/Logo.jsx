import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <h2 className=" uppercase font-bold text-2xl flex items-center">
        <span>Fit</span>
        <img className="rotate-45" src={logo} alt="" />
        <span className="text-red-300">Flex</span>
      </h2>
    </div>
  );
};

export default Logo;
