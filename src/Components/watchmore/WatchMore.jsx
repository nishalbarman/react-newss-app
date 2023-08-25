import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../Contexts/NewsState";
import Loader from "../loader/Loader";
import loading_image from "../../Images/loading-red.gif";
import TopHalf from "./tophalf/TopHalf";
import GridPart from "./gridhalf/GridPart";

function WatchMore() {
  const newsContext = useContext(NewsContext); // NewsContext to get all states from APP component to any child
  const { breakingNewsList } = newsContext.breakingNews;
  const [loading, setLoading] = useState(true);

  const [bigCard, setBigCard] = useState({}); // bigCard hook
  const [smallCardList, setSmallCardList] = useState([]); // smallCard hook

  const [localList, setLocalList] = useState([]);

  useEffect(() => {
    if (breakingNewsList.length !== 0) {
      const [big, ...rest] = breakingNewsList;
      setBigCard(big);
      setSmallCardList([]);
      for (let i = 0; i < 5; i++) {
        setSmallCardList((pr) => {
          console.log("small cards => ", rest[i]);
          let newar = [...pr, rest[i]];
          return newar;
        });
      }
      const [, , , , , ...rst] = rest;
      setLocalList(rst);
      setLoading(false);
    } else {
      newsContext.alert.showAlert({
        message: "Refresh Not Allowed",
        variant: "error",
      });
    }
  }, [breakingNewsList]);

  return (
    <>
      {loading || localList.length === 0 ? (
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
        <>
          <TopHalf bigCard={bigCard} smallCardList={smallCardList} />
          <GridPart localList={localList} />
        </>
      )}
    </>
  );
}

export default WatchMore;
