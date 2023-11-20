"use client";
import { useContext } from "react";
import "./page.css";
import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";

import PromotionsContext from "@/app/marketing/layout";

import promotionTypes from "@/app/promotypes.json";

const mockSinglePromo = {
  company: "Ether and Netherland Collaboration",
  url: "netherlandphoto.durable.ca",
  paragraph:
    "Netherland photography studio that specializes in ethereal emotive images.",
};

const toneOptions = [
  { id: 1, name: "Professional" },
  { id: 2, name: "Casual" },
];

export default function PromotionCreate({ params }) {
  console.log("PromotionCreate params.slug", params.slug);

  const { promotions, setPromotions } = useContext(PromotionsContext);
  console.log("create page promotions context", promotions);

  const promotionType =
    Object.keys(params).length > 0
      ? promotionTypes.find((option) => option.type === params.slug).name
      : "";

  const persistAndSetPromotions = (newPromotions) => {
    localStorage.setItem(
      "localStorage_promotions",
      JSON.stringify(newPromotions)
    );
    setPromotions(newPromotions);
  };

  const handleClickCreate = (typeOfPromo) => {
    console.log("Promo Create handleClickCreate!");

    const newPromo = mockSinglePromo;

    newPromo["type"] = typeOfPromo;

    const timestamp = Date.now();
    newPromo["timestamp"] = timestamp;

    const id = typeOfPromo + "_" + timestamp;
    newPromo["id"] = id;

    const newPromotionsArray = [...promotions, newPromo];
    persistAndSetPromotions(newPromotionsArray);
  };

  return (
    <main>
      <div className="flex-create-wrapper">
        <div className="panel left">
          <div className="panel-header border-bottom-lightgrey">
            <h2 className="heading-create">Details</h2>
            <p>
              Provide us with the following details and we&apos;ll generate a{" "}
              {promotionType} for you.
            </p>
          </div>

          <div className="panel-body">
            <span className="title">What&apos;s this ad about?</span>
            <textarea></textarea>

            <span className="title">Tone of voice</span>
            <DropDownBasic options={toneOptions} />

            <ButtonSecondary label="Regenerate" />
          </div>

          <div className="panel-footer border-top-lightgrey">
            <a href="#" className="icon_open">
              Learn more about {promotionType}
            </a>
          </div>
        </div>

        <div className="panel main">
          <div className="panel-header border-bottom-lightgrey">
            <h2 className="heading-create">Preview</h2>
          </div>
          <div className="panel-body">...generated content</div>
        </div>
      </div>

      <div className="bottom-bar border-top-lightgrey">
        <div className="bottom-bar-inner">
          <ButtonPrimary
            label="Save content"
            handleClick={() => handleClickCreate(promotionType)}
          />
        </div>
      </div>
    </main>
  );
}
