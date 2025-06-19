import React from 'react'
import Header from './components/Header'
import Annoucement_bar from './Home/Annoucement_bar'
import Footer from './components/Footer'
import Section_a from './services/Reactjs/Section_a'
import Section_b from './services/Reactjs/Section_b'
import Section_c from './services/Reactjs/Section_c'
import Section_d from './services/Reactjs/Section_d'
import Section_e from './services/Reactjs/Section_e'
import Section_f from './services/Reactjs/Section_f'

const ReactJs = () => {
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
            <Footer />


        </div>
    )
}

export default ReactJs