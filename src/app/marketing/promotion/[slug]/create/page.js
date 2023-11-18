"use client";
import { useState, useEffect } from "react";
import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";

import "./page.css";

import promotionsTypes from "@/app/promotypes.json";
import mockDataPromotions from "@/app/data.json";

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

  const promotionType =
    Object.keys(params).length > 0
      ? promotionsTypes.find((option) => option.type === params.slug).name
      : "";

  /* originally from /marketing listing page */
  const [promotions, setPromotions] = useState([]);

  console.log("promotions", promotions);

  useEffect(() => {
    const promotionsFromStorage = JSON.parse(
      localStorage.getItem("localStorage_promotions")
    );
    setPromotions(promotionsFromStorage || mockDataPromotions);
  }, []);

  const persistAndSetPromotions = (newPromotions) => {
    localStorage.setItem(
      "localStorage_promotions",
      JSON.stringify(newPromotions)
    );
    // when setting state, does this need to happen on parent component?
    setPromotions(newPromotions);
  };

  const onClickCreate = (typeOfPromo) => {
    console.log("PromotionCreate onClickCreate!");

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
            <span className="title">
              What&apos;s this {promotionType} about?
            </span>
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
          <div className="panel-body">...generated content appears here</div>
        </div>
      </div>

      <div className="bottom-bar border-top-lightgrey">
        <div className="bottom-bar-inner">
          <ButtonPrimary
            label="Save content"
            handleClick={() => onClickCreate(promotionType)}
          />
        </div>
      </div>
    </main>
  );
}
