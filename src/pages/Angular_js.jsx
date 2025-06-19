import React from "react";
import Section_a from "./services/Angular_js/Section_a";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_b from "./services/Angular_js/Section_b";
import Section_c from "./services/Angular_js/Section_c";
import Section_d from "./services/Angular_js/Section_d";
import Section_e from "./services/Angular_js/Section_e";
import Section_f from "./services/Angular_js/Section_f";

function Angular_js() {
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

export default Angular_js;
