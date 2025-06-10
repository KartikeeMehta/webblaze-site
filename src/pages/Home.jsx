import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./Home/section_a";
import Section_b from "./Home/section_b";

function Home() {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Footer />
    </div>
  );
}

export default Home;
