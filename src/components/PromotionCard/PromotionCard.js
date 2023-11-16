import moment from "moment";
import "./PromotionCard.css";

const PromotionCard = ({ promotion, index }) => {
  return (
    <div>
      <span className={`badge ${promotion.type}`}></span>
      <h1>{promotion.type}</h1>
      <div>{moment(promotion.timestamp).format("ll")}</div>
      <div>{promotion.url}</div>
      <h2>{promotion.company}</h2>
      <p>{promotion.paragraph}</p>
      <a href="#" className="icon_view">
        View
      </a>
      <hr />
    </div>
  );
};

export default PromotionCard;
