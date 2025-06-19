import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section_a from './services/Graphic-design/Section_a';
import Section_b from './services/Graphic-design/Section_b';
import Section_c from './services/Graphic-design/Section_c';
import Section_d from './services/Graphic-design/Section_d';
import Section_e from './services/Graphic-design/Section_e';
import Section_f from './services/Graphic-design/Section_f';
import Section_g from './services/Graphic-design/Section_g';



const Graphic_design = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />
            <Section_c />
            <Section_e />
            <Section_d />
            <Section_f />
            <Section_g />
            
            <Footer />
        </div>

    )

}

export default Graphic_design;




