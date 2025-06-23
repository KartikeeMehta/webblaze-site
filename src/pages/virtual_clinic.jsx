import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./Metaverse/virtual_clinic/Section_a";
import Section_b from "./Metaverse/virtual_clinic/Section_d";
import Section_c from "./Metaverse/virtual_clinic/Section_c";
import Section_h from "./Metaverse/virtual_clinic/Section_h";
import Section_i from "./Metaverse/virtual_clinic/Section_i";

function Shop_metaverse() {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_h />
      <Section_i />
      <Footer />
    </div>
  );
}

export default Shop_metaverse;
