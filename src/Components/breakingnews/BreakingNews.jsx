import React, { useContext, useEffect, useState } from "react";
import CityAnchor from "./CityAnchor";
import { NewsContext } from "../../Contexts/NewsState";
import BreakingBigCard from "./breakingBigCard/BreakingBigCard";
import BreakingSmallCard from "./breakingSmallCard/BreakingSmallCard";
import BreakingMediumCard from "./breakingMediumCard/BreakingMediumCard";
import Loader from "../loader/Loader";
import loading_image from "../../Images/loading-red.gif";
import { Link, useNavigate } from "react-router-dom";

function BreakingNews() {
  const newsContext = useContext(NewsContext); // NewsContext to get all states from APP component to any child
  const { breakingNewsList, setBreakingNewsList } = newsContext.breakingNews;

  const [loading, setLoading] = useState(true);

  const [cityActive, setCityActive] = useState(0); // active city hook

  const [bigCard, setBigCard] = useState({}); // bigCard hook
  const [mediumCard, setMediumCard] = useState({}); // mediumCard hook
  const [smallCardList, setSmallCardList] = useState([]); // smallCard hook

  useEffect(() => {
    const [big, medium, ...rest] = breakingNewsList;
    setBigCard(big);
    setMediumCard(medium);
    setSmallCardList([]);
    for (let i = 0; i < 5; i++) {
      setSmallCardList((pr) => {
        console.log("small cards => ", rest[i]);
        let newar = [...pr, rest[i]];
        return newar;
      });
    }
    setLoading(false);
  }, [breakingNewsList]);

  useEffect(() => {
    breakingNewsRequest();
  }, []);

  const breakingNewsRequest = async (
    API = `https://prod.api.etvbharat.com/catalog_lists/app-new-headlines-home-assam.gzip?collective_ads_count=0&page=1&page_size=8&version=v2&response=r2&item_languages=asm&portal_state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`
  ) => {
    console.log(API);
    try {
      setBreakingNewsList([]);
      const res = await fetch(API);
      const data = await res.json();
      const list = data.data.catalog_list_items;
      console.log(list);

      list.forEach((object) => {
        object.catalog_list_items.forEach((newsDetails) => {
          if (newsDetails.message !== "No Items Present") {
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

              setBreakingNewsList((prevList) => {
                let newList = [...prevList, newsDetailsApnaStyle];
                return newList;
              });
            } catch (error) {
              console.warn(
                "Error occured in retrieving list => ",
                error.message
              );
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

  const handleCityClick = (active) => {
    console.log("City changed cliked");
    setLoading(true);
    setCityActive(active);
    switch (active) {
      case 1:
        breakingNewsRequest(
          `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=nalbari&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`
        );
        break;
      case 2:
        breakingNewsRequest(
          `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=sonitpur&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`
        );
        break;
      case 3:
        breakingNewsRequest(
          `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=gauhati&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`
        );
        break;
      case 4:
        breakingNewsRequest(
          `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=jorhat&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`
        );
        break;
      case 5:
        breakingNewsRequest(
          `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=dibrugarh&state=assam&auth_token=${newsContext.AUTHTOKEN}&access_token=${newsContext.ACCESS_TOKEN}`
        );
        break;
      default:
        breakingNewsRequest();
    }
  };

  const navigate = useNavigate();

  return (
    <div
      id="axom-breaking-news"
      className="news-div-first"
      style={{ width: "100%" }}>
      <div className="news-div-titles">
        <h3>অসম</h3>
        <div className="news-title-buttons">
          <CityAnchor
            click={() => {
              handleCityClick(0);
            }}
            name="আটাইবোৰ"
            className={cityActive === 0 ? "active_news_button" : ""}
          />
          <CityAnchor
            click={() => {
              handleCityClick(1);
            }}
            name="Nalbari"
            className={cityActive === 1 ? "active_news_button" : ""}
          />
          <CityAnchor
            name="Sonitpur"
            click={() => {
              handleCityClick(2);
            }}
            className={cityActive === 2 ? "active_news_button" : ""}
          />
          <CityAnchor
            name="Guwahati"
            click={() => {
              handleCityClick(3);
            }}
            className={cityActive === 3 ? "active_news_button" : ""}
          />
          <CityAnchor
            name="Jorhat"
            click={() => {
              handleCityClick(4);
            }}
            className={cityActive === 4 ? "active_news_button" : ""}
          />
          <CityAnchor
            name="Dibrugarh"
            click={() => {
              handleCityClick(5);
            }}
            className={cityActive === 5 ? "active_news_button" : ""}
          />
        </div>
      </div>
      {loading || breakingNewsList.length === 0 ? (
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
        <div className="news-card-content">
          <div id="axom-breaking-big-card-append">
            {/* breaking news left card  */}
            <BreakingBigCard {...bigCard} />
          </div>
          <div className="vertical-devider" />
          <div id="axom-breaking-vertical-append" className="axom-news-cards">
            {/* breaking news middle 5 cards  */}
            {smallCardList?.map((singleNews, i) => {
              return <BreakingSmallCard key={i} {...singleNews} />;
            })}
          </div>
          <div className="vertical-devider" />
          <div>
            <div id="axom-breaking-medium-card-append">
              {/* breaking news right side card */}
              <BreakingMediumCard {...mediumCard} />
            </div>
            <br />
            <div
              className="watch-more-button"
              id="watch-more-assam"
              onClick={() => {
                navigate("/watch-more");
              }}>
              <Link>অধিক পঢ়ক </Link>
              <i
                className="fa-solid fa-arrow-right"
                style={{ color: "#ff0000" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BreakingNews;
