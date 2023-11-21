"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";

import { PromotionsContext } from "@/utils/store";

import promotionTypes from "@/app/promotypes.json";

import "../page.css";

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
  const { promotions, setPromotions } = useContext(PromotionsContext);
  const { paragraph, setParagraph } = useState("");

  const router = useRouter();

  const promotion =
    Object.keys(params).length > 0 &&
    promotionTypes.find((option) => option.type === params.slug);

  const persistAndSetPromotions = (newPromotions) => {
    localStorage.setItem(
      "localStorage_promotions",
      JSON.stringify(newPromotions)
    );
    setPromotions(newPromotions);
  };

  const handleClickCreate = (typeOfPromo) => {
    const newPromo = { ...mockSinglePromo }; // clone object shallow copy

    newPromo["type"] = typeOfPromo;

    const timestamp = Date.now();
    newPromo["timestamp"] = timestamp;

    const id = typeOfPromo + "_" + timestamp;
    newPromo["id"] = id;

    newPromo["paragraph"] = paragraph;

    const newPromotionsArray = [...promotions, newPromo];
    persistAndSetPromotions(newPromotionsArray);

    router.push("/marketing");
  };

  const onChangeTextArea = (ev) => {
    setParagraph(ev.target.value);
  };

  return (
    <main>
      <div className="flex-create-wrapper">
        <div className="panel left">
          <div className="panel-header border-bottom-lightgrey">
            <h2 className="heading-create">Details</h2>
            <p>
              Provide us with the following details and we&apos;ll generate a{" "}
              {promotion.name} for you.
            </p>
          </div>

          <div className="panel-body">
            <span className="title">What&apos;s this ad about?</span>
            <textarea onChange={onChangeTextArea}></textarea>

            <span className="title">Tone of voice</span>
            <DropDownBasic options={toneOptions} />

            <ButtonSecondary label="Regenerate" />
          </div>

          <div className="panel-footer border-top-lightgrey">
            <a href="#" className="icon_open">
              Learn more about {promotion.name}
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
            handleClick={() => handleClickCreate(promotion.type)}
          />
        </div>
      </div>
    </main>
  );
}
