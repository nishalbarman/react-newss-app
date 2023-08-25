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
          <h4
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(news),
            }}></h4>
        </div>
      </div>
      <div className="horizontal-devider" />
    </>
  );
}

export default BreakingSmallCard;
