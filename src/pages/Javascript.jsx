import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Javascript/Section_a'
import Section_b from './Javascript/Section_b'
import Section_c from './Javascript/Section_c'
import Section_d from './Javascript/Section_d'
import Section_e from './Javascript/Section_e'

const Javascript = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />
            <Section_c/>
            <Section_d/>
            <Section_e/>
            <Footer />

        </div>
    )
}

export default Javascript