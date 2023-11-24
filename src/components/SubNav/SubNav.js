"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  useSearchParams,
  usePathname,
} from "next/navigation";

import Link from "next/link";

import promoTypes from "@/app/promotypes.json";

import "./SubNav.css";

const SubNav = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const promoType = type
    ? promoTypes.find((promo) => promo.type === type).name
    : "";

  // get route: /marketing/promotion/create
  // if subpage is /promotion, then change subnav links
  const parentSegment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  const currentSegment = segments[segments.length - 1];

  const pathname = usePathname();
  // console.log("SUBNAV pathname:", pathname);

  return (
    <div id="subnav">
      <div className="desktop-border">
        <div className="flex-wrapper">
          <div className="flex-wrapper-left">
            <div className="flex-row-always">
              {!parentSegment ? (
                <h1>Marketing</h1>
              ) : (
                parentSegment === "promotion" && (
                  <>
                    <Link href="/marketing/promotions" title="Back">
                      <span className="icon_back"></span>
                    </Link>

                    {currentSegment === "create" ? (
                      <h1>Create {promoType}</h1>
                    ) : (
                      <h1>View {promoType}</h1>
                    )}
                  </>
                )
              )}
            </div>
            {segments.length === 0 && (
              <ul>
                <li
                  className={pathname === "/marketing/promotions" ? "on" : ""}
                >
                  <a href="#">Promotions</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            )}
          </div>

          <div className="flex-wrapper-right">
            <a href="#">
              <span className="icon_announcements"></span>
            </a>
            <a href="#">
              <span className="icon_profile"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
