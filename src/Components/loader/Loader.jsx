import React from "react";

function Loader({ url, style }) {
  style.mixBlendMode = "darken";
  return <img src={url} alt="Loading" style={style} />;
}

export default Loader;
