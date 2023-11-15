"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import SubNav from "@/components/SubNav/SubNav";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import DropDown from "@/components/DropDown/DropDown";
import mockData from "@/app/data.json";

export default function Home() {
  const [promotions, setPromotions] = useState([]);

  /* run whenever promotions changes */
  useEffect(() => {
    console.log("promotions has changed!!!!!");
    /* localStorage is a built-in HTML5 object */
    localStorage.setItem("localStorage_promotions", JSON.stringify(promotions));

    // const updatedItemsFromStorage = JSON.parse(localStorage.getItem("localStorage_promotions"));
    // console.log("updatedItemsFromStorage", updatedItemsFromStorage);
  }, [promotions]);

  /* run initially only */
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const promotionsFromStorage = JSON.parse(
        localStorage.getItem("localStorage_promotions")
      );

      if (promotionsFromStorage && promotionsFromStorage.length > 0) {
        console.log("localStorage has existing promotions");
        setPromotions(promotionsFromStorage);
      } else {
        console.log("no existing promotions in localStorage. Using mock data");
        setPromotions(mockData);
      }
    } else {
      console.log("window or window.localStorage does not exist");
    }
  }, []);

  console.log("promotions are", promotions);

  return (
    <div className="site-container">
      <NavBar />

      <SubNav />

      <main>
        <div className="flex-wrapper-start">
          <input
            type="search"
            placeholder="Search"
            id="promosearch"
            name="promosearch"
          />

          <DropDown />

          <span className="flex-move-to-end">
            <ButtonPrimary label="Create promotion" />
          </span>
        </div>

        {promotions.length > 0 &&
          promotions.map((promo) => (
            <div key={promo.id}>
              <h1>{promo.type}</h1>
              <span>{promo.url}</span>
              <h2>{promo.company}</h2>
              <p>{promo.paragraph}</p>
              <hr />
            </div>
          ))}
      </main>
    </div>
  );
}

