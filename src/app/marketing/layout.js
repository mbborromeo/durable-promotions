"use client";
import { useState, useEffect } from "react";

import SubNav from "@/components/SubNav/SubNav";

import { PromotionsContext } from "@/utils/store";

import mockDataPromotions from "@/app/data.json";

export default function MarketingLayout({ children }) {
  const [promotions, setPromotions] = useState([]);

  /* run initially */
  useEffect(() => {
    const promotionsFromStorage = JSON.parse(
      localStorage.getItem("localStorage_promotions")
    );
    setPromotions(promotionsFromStorage || mockDataPromotions);
  }, []);

  return (
    <PromotionsContext.Provider value={{ promotions, setPromotions }}>
      <SubNav />
      {children}
    </PromotionsContext.Provider>
  );
}
