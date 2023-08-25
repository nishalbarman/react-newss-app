import React from "react";
import BreakingBigCard from "../../breakingnews/breakingBigCard/BreakingBigCard";
import BreakingSmallCard from "../../breakingnews/breakingSmallCard/BreakingSmallCard";

function TopHalf({ bigCard, smallCardList }) {
  return (
    <div
      id="axom-breaking-news"
      className="news-div-first"
      style={{ width: "100%" }}>
      <div className="news-div-titles">
        <h3>READ</h3>
      </div>
      <div className="news-card-content">
        <div id="axom-breaking-big-card-append">
          {/* breaking news left card  */}
          <BreakingBigCard {...bigCard} />
        </div>
        <div className="vertical-devider" />
        <div id="axom-breaking-vertical-append" className="axom-news-cards">
          {/* breaking news middle 5 cards  */}
          {smallCardList?.map((singleNews, i) => {
            return <BreakingSmallCard key={i} {...singleNews} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopHalf;
