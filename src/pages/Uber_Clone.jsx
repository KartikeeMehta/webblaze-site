import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Our_Solutions/Uber_clone/Section_a'
import Section_b from './Our_Solutions/Uber_clone/Section_b'
import Section_c from './Our_Solutions/Uber_clone/Section_c'
import Section_d from './Our_Solutions/Uber_clone/Section_d'
import Section_e from './Our_Solutions/Uber_clone/Section_e'
import Section_f from './Our_Solutions/Uber_clone/Section_f'
import Section_g from './Our_Solutions/Uber_clone/Section_g'
import Section_h from './Our_Solutions/Uber_clone/Section_h'
import Section_i from './Our_Solutions/Uber_clone/Section_i'
import Section_j from './Our_Solutions/Uber_clone/Section_j'
import { Section } from 'lucide-react'
import Section_k from './Our_Solutions/Uber_clone/Section_k'

const Uber_Clone = () => {
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
            <Section_g/>
            <Section_h/>
            <Section_i/>
            <Section_j/>
            <Section_k/>
            <Footer />
        </div>
    )
}

export default Uber_Clone