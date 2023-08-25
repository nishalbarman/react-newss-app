import React from "react";

function BreakingMediumCard({ news, desc, published_data, image_url }) {
  return (
    <div id="axom-breaking-medium-card-append">
      <div className="medium-card">
        <div className="medium-card-image">
          <img src={image_url} alt={news} />
        </div>
        <div className="medium-card-body">
          <h4>{news}</h4>
        </div>
      </div>
    </div>
  );
}

export default BreakingMediumCard;
