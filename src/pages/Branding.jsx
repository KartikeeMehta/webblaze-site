import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Section_a from "./Digital_Marketing/Branding/Section_a";
import Footer from "./components/Footer";
import Section_b from "./Digital_Marketing/Branding/Section_b";
import Section_c from "./Digital_Marketing/Branding/Section_c";
import Section_d from "./Digital_Marketing/Branding/Section_d";
import Section_e from "./Digital_Marketing/Branding/Section_e";
import Section_f from "./Digital_Marketing/Branding/Section_f";

const Branding = () => {
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
};

export default Branding;
