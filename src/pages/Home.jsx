import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./Home/section_a";
import Section_b from "./Home/section_b";
import Section_c from "./Home/Section_c";
import Section_d from "./Home/Section_d";
import Section_e from "./Home/Section_e";

function Home() {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_e />
      <Footer />
    </div>
  );
}

export default Home;
