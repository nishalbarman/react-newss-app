import React, { useContext, useEffect, useState } from "react";
import SmallTrendingCard from "./smallTrendingCard/SmallTrendingCard";
import BigTrendingCard from "./bigTrendingCard/BigTrendingCard";
import { NewsContext } from "../../Contexts/NewsState";
import Loader from "../loader/Loader";
import loading_image from "../../Images/loading-red.gif";

export default function Trending() {
  const newsContext = useContext(NewsContext);
  const { trendingNewsList, setTrendingNewsList } = newsContext.trendingNews;
  const [loading, setLoading] = useState(true);

  const [trendingSmallOne, setTrendingSmallOne] = useState({});
  const [trendingSmallTwo, setTrendingSmallTwo] = useState({});
  const [trendingBig, setTrendingBig] = useState({});

  useEffect(() => {
    const [, small1, small2, big] = trendingNewsList;

    setTrendingSmallOne(small1);
    setTrendingSmallTwo(small2);
    setTrendingBig(big);
    setLoading(false);
  }, [trendingNewsList]);

  useEffect(() => {
    trendingNewsRequest();
  }, []);

  const trendingNewsRequest = async () => {
    let query = "trending in assam";
    const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`;

    try {
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

              setTrendingNewsList((prevList) => {
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
    <div id="trending-news">
      <div className="news-div-titles">
        <h3>TRENDING</h3>
      </div>
      {loading || trendingNewsList.length === 0 ? (
        <div
          style={{
            height: "380px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Loader style={{ width: "250px" }} url={loading_image} />
        </div>
      ) : (
        <div className="news-breaking-cotainer">
          <div id="trending_small" className="breaking-cards-half">
            {/* first half two cards  */}
            <SmallTrendingCard {...trendingSmallOne} />
            <SmallTrendingCard {...trendingSmallTwo} />
          </div>

          {/* The big card is going to be appended here */}
          <BigTrendingCard {...trendingBig} />
        </div>
      )}
    </div>
  );
}
