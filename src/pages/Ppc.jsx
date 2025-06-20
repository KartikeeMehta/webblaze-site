import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Digital_Marketing/Ppc/Section_a'
import Section_b from './Digital_Marketing/Ppc/Section_b'
import Section_c from './Digital_Marketing/Ppc/Section_c'
import Section_d from './Digital_Marketing/Ppc/Section_d'
import Section_e from './Digital_Marketing/Ppc/Section_e'
import Section_f from './Digital_Marketing/Ppc/Section_f'
import Section_g from './Digital_Marketing/Ppc/Section_g'
import Section_h from './Digital_Marketing/Ppc/Section_h'

const Ppc = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a/>
            <Section_b/>
            <Section_c/>
            <Section_d/>
            <Section_e/>
            <Section_f/>
            <Section_g/>
            <Section_h/>
            <Footer />
        </div>
    )
}

export default Ppc