const ButtonPrimary = ({ label, handleClick }) => {
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 w-full md:w-40 px-4 py-3.5 md:py-3 text-sm font-medium leading-none text-white hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
