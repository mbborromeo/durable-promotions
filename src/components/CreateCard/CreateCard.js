// import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./CreateCard.css";

const CreateCard = ({ promotion }) => {
  const router = useRouter();

  const handleClickCreate = (ev) => {
    // redirect to /marketing/promotion/create
    // and pass state to this page: type of promotion
    router.push(`/marketing/promotion/${promotion.type}/create`);
  };

  return (
    <div className="card-create">
      <span className={`badge ${promotion.type}`}></span>
      <span className="heading-create">{promotion.name}</span>
      <p>{promotion.desc}</p>

      <ButtonPrimary label="Create" handleClick={handleClickCreate} />
    </div>
  );
};

export default CreateCard;
