import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./Shopify/Section_a";
import Section_b from "./Shopify/Section_b";
import Section_c from "./Shopify/Section_c";
import Section_d from "./Shopify/Section_d";
import Section_e from "./Shopify/Section_e";
import Section_f from "./Shopify/Section_f";

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
      <Footer />
    </div>
  );
}

export default Shopify;
