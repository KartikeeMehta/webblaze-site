import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./Metaverse/virtual_store/Section_a";
import Section_b from "./Metaverse/virtual_store/Section_b";
import Section_c from "./Metaverse/virtual_store/Section_c";
import Section_d from "./Metaverse/virtual_store/Section_d";
import Section_e from "./Metaverse/virtual_store/Section_e";
import Section_f from "./Metaverse/virtual_store/Section_f";
import Section_g from "./Metaverse/virtual_store/Section_g";

function Shop_metaverse() {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_e />
      <Section_f />
      <Section_g />
      <Footer />
    </div>
  );
}

export default Shop_metaverse;
