import React, { useContext } from "react";
import { NewsContext } from "../../Contexts/NewsState";
import Alerts from "./Alerts";

function Alert() {
  const newsContext = useContext(NewsContext);
  const { message, variant } = newsContext.alert.alertMessage;
  console.log(variant, message);

  return (
    <>
      {newsContext.alert.alert && (
        <Alerts variant={variant} message={message}></Alerts>
      )}
    </>
  );
}

export default Alert;
