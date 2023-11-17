"use client";
import { useState, useEffect, useMemo } from "react";
import { Dialog } from "@headlessui/react";
import NavBar from "@/components/NavBar/NavBar";
import SubNav from "@/components/SubNav/SubNav";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import DropDown from "@/components/DropDown/DropDown";
import PromotionCard from "@/components/PromotionCard/PromotionCard";
import mockDataPromotions from "@/app/data.json";
import promoTypes from "@/app/promotypes.json";

const mockSinglePromo = {
  company: "Ether and Netherland Collaboration",
  url: "netherlandphoto.durable.ca",
  paragraph:
    "Netherland photography studio that specializes in ethereal emotive images.",
};

export default function Marketing() {
  const optionAll = { id: 0, name: "ALIBABA", type: "all" };
  const filterOptions = promoTypes;
  filterOptions.unshift(optionAll);

  console.log("filterOptions", filterOptions);

  const [promotions, setPromotions] = useState([]);
  const [filterSelectedIndex, setFilterSelectedIndex] = useState(0);
  const [filterType, setFilterType] = useState(filterOptions[0].type);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(true);

    // draft test
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
            -1 ||
          promo.paragraph
            .toLowerCase()
            .indexOf(keywordTrimmed.toLowerCase()) !== -1 ||
          promo.url.toLowerCase().indexOf(keywordTrimmed.toLowerCase()) !== -1
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

      {/* Create Modal start */}
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}

      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>
          </Dialog.Panel>
        </div>
      </Dialog> 
      */}

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
              <Dialog.Title>Complete your order</Dialog.Title>

              <div className="flex-wrapper-column">
                {mockDataPromotions.length > 0 &&
                  mockDataPromotions.map((promo, p) => {
                    return (
                      <PromotionCard
                        promotion={promo}
                        index={p}
                        key={promo.id + "_" + p}
                      />
                    );
                  })}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      {/* Create Modal end */}

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

        <div className="flex-wrapper-column">
          {searchAndFilteredPromotions.length > 0 &&
            searchAndFilteredPromotions.map((promo, p) => {
              return (
                <PromotionCard
                  promotion={promo}
                  index={p}
                  key={promo.id + "_" + p}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}
