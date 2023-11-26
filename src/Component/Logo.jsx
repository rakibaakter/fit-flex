import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <h2 className=" uppercase font-bold md:text-2xl flex items-center">
      <span className="md:-mt-4">Fit</span>
      <img className="-rotate-[60deg] h-8 w-8 " src={logo} alt="" />
      <span className="text-red-300 mt-4">Flex</span>
    </h2>
  );
};

export default Logo;
