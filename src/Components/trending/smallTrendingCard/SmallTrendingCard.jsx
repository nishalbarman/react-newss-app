import React from "react";

export default function SmallTrendingCard({ image_url, news, publishedDate }) {
  return (
    <div
      className="breaking-card"
      style={{
        backgroundImage: `url('${image_url}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div>
        <p>{news}</p>
        <p>{publishedDate}</p>
      </div>
    </div>
  );
}
