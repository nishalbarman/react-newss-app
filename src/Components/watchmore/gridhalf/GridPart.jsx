import React from "react";
import WorldCard from "../../world/worldcard/WorldCard";

function GridPart({ localList }) {
  return (
    <div id="country-news-grid" className="news-grid-content">
      <div className="news-grid-title-cotainer">
        <div className="horizontal-devider" />
        {/* <h2>দেশ</h2> */}
        <div className="horizontal-devider" />
      </div>

      <div id="country_news" className="news-grid news-grid-jiban">
        {/* card will append here */}
        {localList?.map((newsDetails) => {
          return <WorldCard {...newsDetails} />;
        })}
      </div>
    </div>
  );
}

export default GridPart;
