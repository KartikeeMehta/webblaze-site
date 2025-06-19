import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./services/Shopify/Section_a";
import Section_b from "./services/Shopify/Section_b";
import Section_c from "./services/Shopify/Section_c";
import Section_d from "./services/Shopify/Section_d";
import Section_e from "./services/Shopify/Section_e";
import Section_f from "./services/Shopify/Section_f";
import Section_g from "./services/Shopify/Section_g";

function Shopify() {
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

export default Shopify;
