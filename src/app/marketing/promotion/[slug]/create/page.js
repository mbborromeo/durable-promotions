"use client";
import "./page.css";
import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";

import promotions from "@/app/promotypes.json";

const toneOptions = [
  { id: 1, name: "Professional" },
  { id: 2, name: "Casual" },
];

export default function PromotionCreate({ params }) {
  console.log("PromotionCreate params.slug", params.slug);

  const promotionType =
    Object.keys(params).length > 0
      ? promotions.find((option) => option.type === params.slug).name
      : "";

  const handleClickCreate = () => {
    console.log("Promo Create handleClickCreate!");
  };

  return (
    <main>
      <div className="flex-create-wrapper">
        <div className="panel left">
          <div className="panel-header border-bottom-lightgrey">
            <h2 className="heading-create">Details</h2>
            <p>
              Provide us with the following details and we&apos;ll generate a{" "}
              <b>{promotionType}</b> for you.
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
            handleClick={() => handleClickCreate()}
          />
        </div>
      </div>
    </main>
  );
}
