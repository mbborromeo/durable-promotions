// import Image from "next/image";
import moment from "moment";
import filterOptions from "@/app/promotypes.json";
import "./PromotionCard.css";

const PromotionCard = ({ promotion }) => {
  const promotionHeading = filterOptions.find(
    (option) => option.type === promotion.type
  ).name;

  return (
    <div className="card">
      <div className="flex-row">
        <span className="heading">{promotionHeading}</span>
        <span className={`badge ${promotion.type}`}></span>
      </div>
      <div className="date">{moment(promotion.timestamp).format("ll")}</div>
      <div className="preview">
        <img
          src={`/images/preview_${promotion.type}.png`}
          alt={`preview thumb ${promotion.type}`}
        />
      </div>
      <div className="links">
        <a href="#" className="view">
          View
        </a>
        <a href="#" className="more">
          More
        </a>
      </div>
    </div>
  );
};

export default PromotionCard;
