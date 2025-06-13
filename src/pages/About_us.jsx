import React from "react";
import Annoucement_bar from "./Home/Annoucement_bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section_a from "./About_us/Section_a";
import Section_b from "./About_us/Section_b";
import Section_c from "./About_us/Section_c";
import Section_d from "./About_us/Section_d";
import Section_e from "./About_us/Section_e";
import Section_f from "./About_us/Section_f";
import Section_g from "./About_us/Section_g";
import Section_h from "./About_us/Section_h";
import Section_j from "./Home/Section_j";

function About_us() {
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
            <Section_j />
            <Footer />
        </div>
    );
}

export default About_us;
