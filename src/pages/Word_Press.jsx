import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './services/WordPress/Section_a'
import Section_b from './services/WordPress/Section_b'
import Section_c from './services/WordPress/Section_c'
import Section_d from './services/WordPress/Section_d'
import Section_e from './services/WordPress/Section_e'
import Section_f from './services/WordPress/Section_f'

const Word_Press = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />
            <Section_c />
            <Section_d />
            <Section_e/>
            <Section_f/>
            <Footer />

        </div>
    )
}

export default Word_Press