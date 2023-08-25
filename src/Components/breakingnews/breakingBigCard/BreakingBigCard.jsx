import React from "react";

function BreakingBigCard({ news, desc, published_data, image_url }) {
  return (
    <div id="axom-breaking-big-card-append">
      <div className="big-card">
        <div className="big-card-image">
          <img src={image_url} alt={news} />
        </div>
        <div className="big-card-body">
          <h3>{news}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default BreakingBigCard;
