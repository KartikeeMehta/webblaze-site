import React from "react";
import Section_a from "./services/photography/Section_a";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_b from "./services/photography/Section_b";
import Section_c from "./services/photography/Section_c";
import Section_d from "./services/photography/Section_d";
import Section_e from "./services/photography/Section_e";
import Section_f from "./services/photography/Section_f";
import Section_g from "./services/photography/Section_g";
import Section_h from "./services/photography/Section_h";

function Photography() {
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
      <Section_h />
      <Footer />
    </div>
  );
}

export default Photography;
