import React from "react";
import Section_a from "./photography/Section_a";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_b from "./photography/Section_b";
import Section_c from "./photography/Section_c";
import Section_d from "./photography/Section_d";
import Section_e from "./photography/Section_e";
import Section_f from "./photography/Section_f";
import Section_g from "./photography/Section_g";
import Section_h from "./photography/Section_h";

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
