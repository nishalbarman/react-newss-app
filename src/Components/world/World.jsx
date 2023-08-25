import React, { useState, useContext, useEffect } from "react";
import WorldCard from "./worldcard/WorldCard";
import { NewsContext } from "../../Contexts/NewsState";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./World.css";
import Loader from "../loader/Loader";
import loading_image from "../../Images/loading-red.gif";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

function World() {
  const newsContext = useContext(NewsContext);
  const { worldNewsList, setWorldNewsList } = newsContext.worldNews;
  const [loading, setLoading] = useState(true);
  const [sliderList, setSliderList] = useState([]);

  const splideObject = {
    slidesPerView: 3,
    spaceBetween: 15,
    sliderPerGroup: 3,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    centerInsufficientSlides: true,

    width: 1200,

    autoplay: {
      delay: 5000,
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    // },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        width: 250,
      },
      520: {
        slidesPerView: 2,

        width: 500,
      },
      768: {
        slidesPerView: 3,
        width: 1000,
      },
      1000: {
        slidesPerView: 4,
        width: 1200,
      },
    },
  };

  const swiper = useSwiper();

  useEffect(() => {
    if (worldNewsList.length !== 0) {
      let newArray = [];
      for (let i = 0; i < 15; i++) {
        newArray.push(worldNewsList[i]);
      }
      setSliderList(newArray);
    }
    setLoading(false);
  }, [worldNewsList]);

  useEffect(() => {
    worldNewsRequest();
  }, []);

  const worldNewsRequest = async () => {
    let query = "world";
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

              setWorldNewsList((prevList) => {
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
    <div className="slide-main-container swiper">
      <div
        id="sldie-title"
        className="news-div-titles"
        style={{ backgroundColor: "white" }}>
        <h3>বিশ্ব</h3>
        <div className="news-title-buttons">
          <Link to="/world" className="active_news_button">
            অধিক পঢ়ক
          </Link>
        </div>
      </div>
      <div
        className="slide-outer swiper"
        style={{ backgroundColor: loading ? "white" : "rgb(245, 245, 245)" }}>
        {loading || worldNewsList.length === 0 ? (
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
          <Swiper
            className="slide-container"
            {...splideObject}
            navigation={true}
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => console.log(swiper)}>
            {/* slides card */}
            {sliderList?.map((singleNews) => {
              return (
                <SwiperSlide>
                  <WorldCard {...singleNews} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default World;
