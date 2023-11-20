"use client";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";

import { PromotionsContext } from "@/utils/store";

import "./page.css";

export default function Promotion({ params }) {
  // const promoType = params.slug;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // get promotions state from context
  const { promotions } = useContext(PromotionsContext);

  // lookup promotion based on ID
  const promotion = promotions.find((promo) => promo.id === id);

  // display promotion data in layout
  return (
    <main>
      {promotion && (
        <>
          <div className="flex-create-wrapper">
            <div className="panel left">
              <div className="panel-header border-bottom-lightgrey">
                <h2 className="heading-create">Details</h2>
                {/* <p>
                  Provide us with the following details and we&apos;ll generate a{" "}
                  {promotion.name} for you.
                </p> */}
              </div>

              <div className="panel-body">
                <span className="title">What&apos;s this ad about?</span>
                <textarea>{promotion.paragraph}</textarea>

                {/* <span className="title">Tone of voice</span>
                <DropDownBasic options={toneOptions} />

                <ButtonSecondary label="Regenerate" /> */}
              </div>

              <div className="panel-footer border-top-lightgrey">
                <a href="#" className="icon_open">
                  Learn more about
                  {/* {promotion.name} */}
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
              <ButtonPrimary label="Edit content" />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
