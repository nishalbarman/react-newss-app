import React from "react";

function PageNotFound() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1868.jpg?w=2000"
        // src="https://cutewallpaper.org/24/404-png/simple-404-page-designs-themes-templates-and-downloadable-graphic-elements-on-dribbble.png"
        alt="Page not found"
        style={{
          width: "600px",
          objectFit: "scale-down",
          mixBlendMode: "darken",
        }}
      />
    </div>
  );
}

export default PageNotFound;
