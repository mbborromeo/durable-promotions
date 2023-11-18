import "./ButtonSecondary.css";

const ButtonSecondary = ({ label, handleClick }) => {
  return (
    <button
      type="button"
      className="btn-secondary inline-flex justify-center rounded-md border border-transparent bg-indigo-50 w-28 px-4 py-2.5 text-sm font-medium leading-none text-indigo-700 hover:bg-indigo-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;
