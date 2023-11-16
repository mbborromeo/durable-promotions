"use client";
import { useState, useEffect } from "react";
import moment from "moment";
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

const filterOptions = [
  { id: 0, name: "All", type: "all" },
  { id: 1, name: "Google ad", type: "google" },
  { id: 2, name: "Facebook post", type: "facebook" },
  { id: 3, name: "Tweet", type: "twitter" },
  { id: 4, name: "Email", type: "email" },
];

export default function Marketing() {
  const [promotions, setPromotions] = useState([]);
  const [filterSelectedIndex, setFilterSelectedIndex] = useState(0); // not used yet

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

  const onChangeFilter = (filterObj) => {
    console.log("onChangeFilter index is:", filterObj.id);
    console.log("onChangeFilter type is:", filterObj.type);
    setFilterSelectedIndex(filterObj.id);

    // filter list of promotions according to type selected
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

          <DropDown
            options={filterOptions}
            value={filterSelectedIndex}
            handleOnChange={onChangeFilter}
          />

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
            return (
              <div key={promo.id + "_" + p}>
                <h1>{promo.type}</h1>
                <div>{moment(promo.timestamp).format("ll")}</div>
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
