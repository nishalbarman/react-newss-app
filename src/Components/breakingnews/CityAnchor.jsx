import React from "react";

function CityAnchor({ name, className, click }) {
  return (
    <span id="all" onClick={click} href="#" className={className || ""}>
      {name}
    </span>
  );
}

export default CityAnchor;
