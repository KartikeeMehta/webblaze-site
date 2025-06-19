import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./services/Shopify_app/Section_a";
import Section_b from "./services/Shopify_app/Section_b";
import Section_d from "./services/Shopify_app/Section_d";
import Section_e from "./services/Shopify_app/Section_e";
import Section_f from "./services/Shopify_app/Section_f";
import Section_g from "./services/Shopify_app/Section_g";
import Section_c from "./services/Shopify_app/Section_c";

function Shopify_app() {
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

export default Shopify_app;
