import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Our_Solutions/CarPooling_App/Section_a'
import Section_b from './Our_Solutions/CarPooling_App/Section_b'
import Section_c from './Our_Solutions/CarPooling_App/Section_c'
import Section_d from './Our_Solutions/CarPooling_App/Section_d'
import Section_f from './Our_Solutions/CarPooling_App/Section_f'
import Section_g from './Our_Solutions/CarPooling_App/Section_g'


const CarPooling_App = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a/>
            <Section_b/>
            <Section_c/>
            <Section_d/>
            <Section_f/>
            <Section_g/>
            <Footer />
        </div>
    )
}

export default CarPooling_App;