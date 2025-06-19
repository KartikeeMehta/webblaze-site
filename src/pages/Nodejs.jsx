import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Section_a from './NodeJs/Section_a'
import Footer from './components/Footer'
import Section_b from './NodeJs/Section_b'
import Section_c from './NodeJs/Section_c'
import Section_d from './NodeJs/Section_d'
import Section_e from './NodeJs/Section_e'

const Nodejs = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b/>
            <Section_c/>
            <Section_d/>
            <Section_e/>
            <Footer />
        </div>
    )
}

export default Nodejs