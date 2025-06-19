import React from "react";
import Section_a from "./services/Aws/Section_a";
import Section_b from "./services/Aws/Section_b";
import Section_c from "./services/Aws/Section_c";
import Section_d from "./services/Aws/Section_d";
import Section_e from "./services/Aws/Section_e";
import Section_f from "./services/Aws/Section_f";
import Section_g from "./services/Aws/Section_g";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Aws() {
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

export default Aws;
