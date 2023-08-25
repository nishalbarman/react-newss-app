import React, { useState, useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import loading_image from "../../Images/loading-red.gif";
import { NewsContext } from "../../Contexts/NewsState";
import WorldCard from "../world/worldcard/WorldCard";

function Country() {
  const newsContext = useContext(NewsContext);
  const { countryNewsList, setCountryNewsList } = newsContext.countryNews;
  const [loading, setLoading] = useState(true);
  const [localList, setLocalList] = useState([]);

  useEffect(() => {
    console.log(countryNewsList);
    if (countryNewsList.length !== 0) {
      let newArray = [];
      for (let i = 0; i < 20; i++) {
        newArray.push(countryNewsList[i]);
      }
      setLocalList(newArray);
    }
    setLoading(false);
  }, [countryNewsList]);

  useEffect(() => {
    countryNewsRequest();
  }, []);

  const countryNewsRequest = async () => {
    try {
      let query = "india related news";
      const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`;

      const res = await fetch(API);
      let list = await res.json();
      list = list.data.catalog_list_items;

      list.forEach((object) => {
        object.catalog_list_items.forEach((newsDetails) => {
          if (object.message !== "No Items Present") {
            try {
              const {
                title: news,
                genres: category,
                keywords,
                publish_date_string: publishedDate,
                short_description: desc,
                thumbnails: {
                  high_16_9: { url: image_url, alt_tags, caption },
                },
                web_url,
              } = newsDetails;

              let newsDetailsApnaStyle = {
                news,
                keywords,
                category,
                publishedDate,
                desc,
                image_url,
                web_url,
                alt_tags,
                caption,
              };

              setCountryNewsList((prevList) => {
                let newList = [...prevList, newsDetailsApnaStyle];
                return newList;
              });
            } catch (error) {
              console.log("blank objects");
            }
          }
        });
      });
    } catch (er) {
      newsContext.alert.showAlert({
        message: "Some technical error occured...",
        variant: "error",
      });
    }
  };
  return (
    <div id="country-news-grid" className="news-grid-content">
      <div className="news-grid-title-cotainer">
        <div className="horizontal-devider" />
        <h2>দেশ</h2>
        <div className="horizontal-devider" />
      </div>
      {loading || countryNewsList.length === 0 ? (
        <div
          className="news-card-content"
          style={{
            height: "380px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Loader style={{ width: "250px" }} url={loading_image} />
        </div>
      ) : (
        <div id="country_news" className="news-grid news-grid-jiban">
          {/* card will append here */}
          {localList.map((newsDetails) => {
            return <WorldCard {...newsDetails} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Country;
