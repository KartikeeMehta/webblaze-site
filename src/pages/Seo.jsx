import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Digital_Marketing/Seo/Section_a'
import Section_b from './Digital_Marketing/Seo/Section_b'
import Section_c from './Digital_Marketing/Seo/Section_c'
import Section_d from './Digital_Marketing/Seo/Section_d'
import Section_e from './Digital_Marketing/Seo/Section_e'
import Section_f from './Digital_Marketing/Seo/Section_f'
import Section_g from './Digital_Marketing/Seo/Section_g'

const Seo = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />
            <Section_c/>
            <Section_d/>
            <Section_e/>
            <Section_f/>
            <Section_g/>
            <Footer />
        </div>
    )
}

export default Seo