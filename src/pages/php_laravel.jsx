import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./php_laravel/Section_a";
import Section_c from "./php_laravel/Section_c";
import Section_f from "./php_laravel/Section_f";
import Section_g from "./php_laravel/Section_g";
import Section_b from "./php_laravel/Section_b";
import Section_d from "./php_laravel/Section_d";

function Php_laravel() {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_f />
      <Section_g />
      <Footer />
    </div>
  );
}

export default Php_laravel;
