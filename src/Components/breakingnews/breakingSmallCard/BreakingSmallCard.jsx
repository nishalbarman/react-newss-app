import React, { useContext } from "react";
import { NewsContext } from "../../../Contexts/NewsState";
import DOMPurify from "dompurify";

function BreakingSmallCard({ news, desc, published_data, image_url }) {
  const newsContext = useContext(NewsContext);
  const { showAlert } = newsContext.alert;

  return (
    <>
      <div
        className="small-cards"
        onClick={() => {
          console.log("showing an alert");
          showAlert({ message: news, variant: "success" });
        }}>
        <div className="small-card-image-outer">
          <img src={image_url} alt={news} />
        </div>
        <div>
          <p
            style={{ fontWeight: "500" }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(news),
            }}></p>
        </div>
      </div>
      <div className="horizontal-devider" />
    </>
  );
}

export default BreakingSmallCard;
