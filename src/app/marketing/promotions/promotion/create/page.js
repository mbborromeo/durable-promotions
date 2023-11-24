"use client";
import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";

import { PromotionsContext } from "@/utils/store";

import promoTypes from "@/app/promotypes.json";
import toneOptions from "@/app/tone.json";

import "../page.css";

const mockSinglePromo = {
  company: "Ether and Netherland Collaboration",
  url: "netherlandphoto.durable.ca",
  paragraph:
    "Netherland photography studio that specializes in ethereal emotive images.",
};

export default function PromotionCreate() {
  const { promotions, setPromotions } = useContext(PromotionsContext);
  const [paragraph, setParagraph] = useState("");
  const [textfieldInvalid, setTextfieldInvalid] = useState(false);
  const [dropdownInvalid, setDropdownInvalid] = useState(false);
  const [isTextPristine, setIsTextPristine] = useState(true);
  const [isDropDownPristine, setIsDropDownPristine] = useState(true);
  const [dropdownSelectedIndex, setDropdownSelectedIndex] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const promotion = promoTypes.find((promo) => promo.type === type);

  const persistAndSetPromotions = (newPromotions) => {
    localStorage.setItem(
      "localStorage_promotions",
      JSON.stringify(newPromotions)
    );
    setPromotions(newPromotions);
  };

  const handleClickCreate = (typeOfPromo) => {
    // validate fields are filled in
    if (!textfieldInvalid && paragraph !== "" && !isDropDownPristine) {
      const newPromo = { ...mockSinglePromo }; // clone object shallow copy

      newPromo["type"] = typeOfPromo;

      const timestamp = Date.now();
      newPromo["timestamp"] = timestamp;

      const id = typeOfPromo + "_" + timestamp;
      newPromo["id"] = id;

      newPromo["paragraph"] = paragraph;

      // const tone = toneOptions[dropdownSelectedIndex];
      newPromo["tone"] = dropdownSelectedIndex; // tone

      const newPromotionsArray = [...promotions, newPromo];
      persistAndSetPromotions(newPromotionsArray);

      router.push("/marketing");
    } else {
      if (paragraph === "") {
        setTextfieldInvalid(true);
      }

      if (dropdownSelectedIndex === 0) {
        setDropdownInvalid(true);
      }
    }
  };

  const onChangeTextArea = (ev) => {
    const inputText = ev.target.value;
    setParagraph(inputText);

    if (inputText !== "") {
      setIsTextPristine(false);
      setTextfieldInvalid(false);
    }

    if (inputText === "" && !isTextPristine) {
      setTextfieldInvalid(true);
    }
  };

  const onChangeDropdown = (toneObj) => {
    const toneId = toneObj.id;
    setDropdownSelectedIndex(toneId);

    if (toneId > 0) {
      setIsDropDownPristine(false);
      setDropdownInvalid(false);
    }
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
            {textfieldInvalid && (
              <span className="invalid">Ensure textarea has input</span>
            )}
            <span className="title">What&apos;s this ad about?</span>
            <textarea value={paragraph} onChange={onChangeTextArea}></textarea>

            {dropdownInvalid && (
              <span className="invalid">Ensure dropdown has selection</span>
            )}
            <span className="title">Tone of voice</span>
            <DropDownBasic
              options={toneOptions}
              selectedIndex={dropdownSelectedIndex}
              handleOnChange={onChangeDropdown}
            />

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
