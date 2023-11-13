const ButtonPrimary = ({ label, handleClick }) => {
  return (
    <button type="button" className="btn-primary" onClick={handleClick}>
      {label}
    </button>
  );
};

export default ButtonPrimary;
