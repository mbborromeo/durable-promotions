"use client";
import { useState, useEffect, useMemo } from "react";
import moment from "moment";
import NavBar from "@/components/NavBar/NavBar";
import SubNav from "@/components/SubNav/SubNav";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import DropDown from "@/components/DropDown/DropDown";
import mockDataPromotions from "@/app/data.json";
import filterOptions from "@/app/promotypes.json";

const mockSinglePromo = {
  company: "Ether and Netherland Collaboration",
  url: "etherphoto.durable.ca",
  paragraph:
    "Second A photography studio that specializes in ethereal emotive images.",
};

export default function Marketing() {
  const [promotions, setPromotions] = useState([]);
  const [filterSelectedIndex, setFilterSelectedIndex] = useState(0);
  const [filterType, setFilterType] = useState(filterOptions[0].type);
  const [searchKeyword, setSearchKeyword] = useState("");

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
    setFilterSelectedIndex(filterObj.id);
    setFilterType(filterObj.type);
  };

  const onChangeSearch = (e) => {
    console.log("onChangeSearch value", e.target.value);
    setSearchKeyword(e.target.value);
  };

  // filter list of promotions according to type selected and keyword from input
  const searchAndFilteredPromotions = useMemo(() => {
    // input search on all fields of promotion
    let promotionsToSearch = promotions;
    if (searchKeyword !== "") {
      const keywordTrimmed = searchKeyword.trim();
      promotionsToSearch = promotions.filter(
        (promo) =>
          promo.company.toLowerCase().indexOf(keywordTrimmed.toLowerCase()) !==
          -1
      );
    }

    // dropdown type of promo filter
    if (filterType === "all") {
      return promotionsToSearch;
    } else {
      const filteredListByType = promotionsToSearch.filter(
        (promo) => promo.type === filterType
      );
      return filteredListByType;
    }
  }, [promotions, filterType, searchKeyword]);

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
            onChange={onChangeSearch}
          />

          <DropDown
            options={filterOptions}
            selectedIndex={filterSelectedIndex}
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

        {searchAndFilteredPromotions.length > 0 &&
          searchAndFilteredPromotions.map((promo, p) => {
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
