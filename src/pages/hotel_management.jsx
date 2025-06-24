import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Section_a from "./Our_Solutions/Hotel_manage/Section_a";
import Footer from "./components/Footer";

function Hotel_management() {
  return (
    <div>
      <>
        <Annoucement_bar />
        <Header />
        <Section_a />
        <Footer />
      </>
    </div>
  );
}

export default Hotel_management;
