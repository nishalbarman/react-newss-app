import React from "react";

export default function BigTrendingCard(trendingBig) {
  return (
    <div
      className="middle-break-card"
      style={{
        backgroundImage: `url('${trendingBig.image_url}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div>
        <p>{trendingBig.news}</p>
        <p>{trendingBig.publishedDate}</p>
      </div>
    </div>
  );
}
