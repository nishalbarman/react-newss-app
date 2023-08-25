import React from "react";
import DOMPurify from "dompurify";

function WorldCard({ image_url, news, desc, alt_tag }) {
  return (
    <div className="big-card swiper-cards swiper-slide">
      <div className="big-card-image">
        <img src={image_url} alt={alt_tag} />
      </div>
      <div className="big-card-body">
        <h3>{news}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(desc),
          }}></p>
      </div>
    </div>
  );
}

export default WorldCard;
