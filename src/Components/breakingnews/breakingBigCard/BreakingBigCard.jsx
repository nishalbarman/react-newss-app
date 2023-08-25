import React from "react";
import DOMPurify from "dompurify";

function BreakingBigCard({ news, desc, published_data, image_url }) {
  return (
    <div id="axom-breaking-big-card-append">
      <div className="big-card">
        <div className="big-card-image">
          <img src={image_url} alt={news} />
        </div>
        <div className="big-card-body">
          <h3
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(news),
            }}></h3>
          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }}></p>
        </div>
      </div>
    </div>
  );
}

export default BreakingBigCard;
