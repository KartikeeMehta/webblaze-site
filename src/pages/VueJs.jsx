import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './services/VueJs/Section_a'
import Section_b from './services/VueJs/Section_b'
import Section_c from './services/VueJs/Section_c'
import { Section } from 'lucide-react'
import Section_d from './services/VueJs/Section_d'
import Section_f from './services/VueJs/Section_f'
import Section_g from './services/VueJs/Section_g'
import Section_e from './services/VueJs/Section_e'

const VueJs = () => {
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
            <Footer />
        </div>

    )
}

export default VueJs