import React from "react";
import Section_a from "./Metaverse/shop_metaverse/Section_a";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_b from "./Metaverse/shop_metaverse/Section_b";

function Shop_metaverse() {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Footer />
    </div>
  );
}

export default Shop_metaverse;
