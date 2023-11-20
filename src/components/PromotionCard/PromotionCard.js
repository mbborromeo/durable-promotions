import Link from "next/link";
// import Image from "next/image";
import moment from "moment";
import filterOptions from "@/app/promotypes.json";
import "./PromotionCard.css";

const PromotionCard = ({ promotion }) => {
  // console.log("PromotionCard --------- promotion", promotion);
  const promoTypes = filterOptions.filter((option) => option.id !== 0);
  // console.log("promoTypes", promoTypes);
  const promotionObject = promoTypes.find((option) => {
    // console.log("option", option);
    return promotion.type === option.type;
  });
  // console.log("promotionObject", promotionObject);
  const promotionHeading = promotionObject.name;

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
        <Link href={`/marketing/promotion/${promotion.type}/`} className="view">
          View
        </Link>
        <a href="#" className="more">
          More
        </a>
      </div>
    </div>
  );
};

export default PromotionCard;
