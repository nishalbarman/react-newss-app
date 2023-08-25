import React from "react";
import Trending from "../trending/Trending";
import BreakingNews from "../breakingnews/BreakingNews";
import World from "../world/World";
import Country from "../country/Country";

export default function HomePage() {
  return (
    <>
      <Trending />
      <BreakingNews />
      <World />
      <Country />
    </>
  );
}
