"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import SubNav from "@/components/SubNav/SubNav";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import DropDown from "@/components/DropDown/DropDown";
import mockDataPromotions from "@/app/data.json";

const mockSinglePromo = {
  company: "Ether Photo Studio 2",
  url: "etherphoto.durable.ca",
  paragraph:
    "Second A photography studio that specializes in ethereal emotive images.",
};

export default function Marketing() {
  const [promotions, setPromotions] = useState([]);

  /* run initially */
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
    setPromotions(newPromotions);
  };

  const onClickCreate = (typeOfPromo) => {
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
              handleClick={() => {
                onClickCreate("google");
              }}
            />
          </span>
        </div>

        {promotions.length > 0 &&
          promotions.map((promo, p) => {
            const date = new Date(promo.timestamp);
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
