"use client";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

import { PromotionsContext } from "@/utils/store";

export default function Promotion({ params }) {
  const promoType = params.slug;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // get promotions state from context
  const { promotions } = useContext(PromotionsContext);
  console.log("context promotions", promotions);

  // lookup promotion based on ID
  const promotion = promotions.find((promo) => promo.id === id);
  console.log("View promotion:", promotion);

  // display promotion data in layout
  return (
    <main>
      Viewing {promoType} ID: {id}
      {/* <p>{promotion.paragraph}</p> */}
    </main>
  );
}
