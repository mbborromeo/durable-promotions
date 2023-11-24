"use client";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";

import toneOptions from "@/app/tone.json";
import promoTypes from "@/app/promotypes.json";

import { PromotionsContext } from "@/utils/store";

import "./page.css";

export default function Promotion() {
  // { params }
  // const promoType = params.slug;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  // get promotions state from context
  const { promotions } = useContext(PromotionsContext);

  // lookup promotion based on ID
  const promotion = promotions.find((promo) => promo.id === id);
  const promoType = promoTypes.find((promo) => promo.type === type).name;

  // display promotion data in layout
  return (
    <main>
      {promotion && (
        <>
          <div className="flex-create-wrapper">
            <div className="panel left">
              <div className="panel-header border-bottom-lightgrey">
                <h2 className="heading-create">Details</h2>
                <p>
                  Provide us with the following details and we&apos;ll generate
                  a {promoType} for you.
                </p>
              </div>

              <div className="panel-body">
                <span className="title">What&apos;s this ad about?</span>
                <textarea defaultValue={promotion.paragraph}></textarea>

                <span className="title">Tone of voice</span>
                <DropDownBasic
                  options={toneOptions}
                  selectedIndex={promotion.tone}
                />

                {/* <ButtonSecondary label="Regenerate" /> */}
              </div>

              <div className="panel-footer border-top-lightgrey">
                <a href="#" className="icon_open">
                  Learn more about {promoType}
                </a>
              </div>
            </div>

            <div className="panel main">
              <div className="panel-header border-bottom-lightgrey">
                <h2 className="heading-create">Preview</h2>
              </div>
              <div className="panel-body view">
                <img
                  src={`/images/preview_${promotion.type}.png`}
                  alt={`preview thumb ${promotion.type}`}
                />
              </div>
            </div>
          </div>

          <div className="bottom-bar border-top-lightgrey">
            <div className="bottom-bar-inner">
              <ButtonPrimary label="Edit content" />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
