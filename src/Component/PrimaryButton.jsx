const PrimaryButton = ({ value }) => {
  return (
    <button className="btn btn-ghost uppercase bg-red-600 text-white hover:text-red-600 hover:outline hover:outline-1">
      {value}
    </button>
  );
};

export default PrimaryButton;
