import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./CreateCard.css";

const CreateCard = ({ promotion, index }) => {
  return (
    <div className="card-create">
      {/* <div className="flex-row"> */}
      <span className={`badge ${promotion.type}`}></span>
      <span className="heading-create">{promotion.name}</span>
      {/* </div> */}

      <p>{promotion.desc}</p>

      <ButtonPrimary
        label="Create"
        // handleClick={}
      />
    </div>
  );
};

export default CreateCard;
