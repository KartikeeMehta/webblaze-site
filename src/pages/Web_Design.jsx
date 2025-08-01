import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './services/Web_Design/Section_a'
import Section_b from './services/Web_Design/Section_b'
import Section_c from './services/Web_Design/Section_c'
import Section_d from './services/Web_Design/Section_d'
import Section_e from './services/Web_Design/Section_e'
import Section_f from './services/Web_Design/Section_f'
import Section_g from './services/Web_Design/Section_g'
import Section_h from './services/Web_Design/Section_h'

const Web_Design = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
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

export default Web_Design