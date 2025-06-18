import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Web_Design/Section_a'
import Section_b from './Web_Design/Section_b'
import Section_c from './Web_Design/Section_c'
import Section_d from './Web_Design/Section_d'
import Section_e from './Web_Design/Section_e'

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
            <Footer />

        </div>
    )
}

export default Web_Design