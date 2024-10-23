import React from "react";
import Example from "../components/blooog-pooost/Example";
import HeaderText from "../components/HeaderText";
import { HoverImageLinks } from "../components/HoverImageLinks";
import ShuffleHero from "../components/ShuffleHero";

const Home = () => {
  return (
    <div>
      <Example />
      <HeaderText />
      <ShuffleHero />
      <HoverImageLinks />
    </div>
  );
};

export default Home;
