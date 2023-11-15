"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import SubNav from "@/components/SubNav/SubNav";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import DropDown from "@/components/DropDown/DropDown";
import mockDataPromotions from "@/app/data.json";

const mockSinglePromo = {
  type: "google",
  company: "Ether Photo Studio 2",
  id: "g_eps_2",
  url: "etherphoto.durable.ca",
  paragraph:
    "Second A photography studio that specializes in ethereal emotive images.",
};

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
        setPromotions(mockDataPromotions);
      }
    } else {
      console.log("window or window.localStorage does not exist");
    }
  }, []);

  console.log("promotions are", promotions);

  const onClickCreate = () => {
    console.log("onClickCreate - add to state and localStorage");
    const newPromo = mockSinglePromo;
    const timestamp = Date.now();
    console.log("timestamp", timestamp);
    newPromo["timestamp"] = timestamp;

    const newPromotionsArray = [...promotions, newPromo];
    console.log("newPromotionsArray", newPromotionsArray);
    setPromotions(newPromotionsArray);
  };

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
            <ButtonPrimary
              label="Create promotion"
              handleClick={onClickCreate}
            />
          </span>
        </div>

        {promotions.length > 0 &&
          promotions.map((promo, p) => {
            const date = new Date(promo.timestamp);
            console.log("date", date);
            const month = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            const monthName = month[date.getMonth()];

            return (
              <div key={promo.id + "_" + p}>
                <h1>{promo.type}</h1>
                <div>
                  {date.getDate() + " " + monthName + ", " + date.getFullYear()}
                </div>
                <div>{promo.url}</div>
                <h2>{promo.company}</h2>
                <p>{promo.paragraph}</p>
                <hr />
              </div>
            );
          })}
      </main>
    </div>
  );
}

