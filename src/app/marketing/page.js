"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
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
  // const [promotions, setPromotions] = useState([]);
  // source: https://dev.to/saranshk/react-hooks-and-local-storage-let-s-build-a-todo-app-39g3#the-useeffect-hook
  const promotionsFromStorage = JSON.parse(
    localStorage.getItem("localStorage_promotions")
  );
  // const [promotions, setPromotions] = useState(promotionsFromStorage || []);
  const [promotions, setPromotions] = useState(
    promotionsFromStorage || mockDataPromotions
  );

  /* run initially only */
  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     const promotionsFromStorage = JSON.parse(
  //       localStorage.getItem("localStorage_promotions")
  //     );
  //
  //     if (promotionsFromStorage && promotionsFromStorage.length > 0) {
  //       setPromotions(promotionsFromStorage);
  //     } else {
  //       setPromotions(mockDataPromotions);
  //     }
  //   } else {
  //     console.log("window or window.localStorage does not exist");
  //   }
  // }, []);

  /* run whenever promotions changes */
  useEffect(() => {
    /* localStorage is a built-in HTML5 object */
    localStorage.setItem("localStorage_promotions", JSON.stringify(promotions));
  }, [promotions]);

  const onClickCreate = (typeOfPromo) => {
    const newPromo = mockSinglePromo;

    newPromo["type"] = typeOfPromo;

    const timestamp = Date.now();
    newPromo["timestamp"] = timestamp;

    const id = typeOfPromo + "_" + timestamp;
    newPromo["id"] = id;

    const newPromotionsArray = [...promotions, newPromo];
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

