import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './VueJs/Section_a'
import Section_b from './VueJs/Section_b'
import Section_c from './VueJs/Section_c'
import { Section } from 'lucide-react'
import Section_d from './VueJs/Section_d'
import Section_f from './VueJs/Section_f'

const VueJs = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a/>
            <Section_b/>
            <Section_c/>
            <Section_d/>
            <Section_f/>
            <Footer />
        </div>

    )
}

export default VueJs