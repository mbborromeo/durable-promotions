"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

const SubNav = () => {
  // get route: /marketing/promotion/create
  // if subpage is /promotion, then change subnav links
  const parentSegment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  const currentSegment = segments[segments.length - 1];
  console.log("segments", segments);
  console.log("SubNav url parentSegment:", parentSegment);
  console.log("currentSegment", currentSegment);

  return (
    <div id="subnav">
      <div className="desktop-border">
        <div className="flex-wrapper">
          <div className="flex-wrapper-left">
            <>
              {currentSegment === "create" ? (
                <h1>Create</h1>
              ) : currentSegment === "promotion" ? (
                <h1>View</h1>
              ) : (
                <h1>Marketing</h1>
              )}
            </>
            {segments.length === 0 && (
              <ul>
                <li className="on">
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
