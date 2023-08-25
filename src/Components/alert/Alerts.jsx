import React from "react";
import "./Alerts.css";
import Container from "../container/Container";

function Alerts({ variant, message }) {
  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };
  return (
    <Container
      style={{
        marginBottom: "20px",
      }}>
      <div className={`alert_${variant} alert`}>
        <span>
          {capitalizeFirstLetter(variant)} : {message}
        </span>
      </div>
    </Container>
  );
}

export default Alerts;
