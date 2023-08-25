import { createContext, useState } from "react";

const newsContext = createContext();

const NewsState = ({ children }) => {
  const [breakingNewsList, setBreakingNewsList] = useState([]);
  const [trendingNewsList, setTrendingNewsList] = useState([]);
  const [worldNewsList, setWorldNewsList] = useState([]);
  const [countryNewsList, setCountryNewsList] = useState([]);

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    variant: "",
  });
  const showAlert = ({ message, variant }) => {
    setAlertMessage({ message, variant });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <newsContext.Provider
      value={{
        breakingNews: {
          breakingNewsList,
          setBreakingNewsList,
        },
        trendingNews: {
          trendingNewsList,
          setTrendingNewsList,
        },
        countryNews: {
          countryNewsList,
          setCountryNewsList,
        },
        worldNews: {
          worldNewsList,
          setWorldNewsList,
        },
        alert: {
          alert,
          showAlert,
          alertMessage,
        },
        AUTHTOKEN: "xBUKcKnXfngfrqGoF93y",
        ACCESS_TOKEN: "TjeNsXehJqhh2DGJzBY9",
      }}>
      {children}
    </newsContext.Provider>
  );
};

export const NewsContext = newsContext;
export default NewsState;
