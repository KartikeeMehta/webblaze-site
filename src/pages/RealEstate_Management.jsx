import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Section_a from './Our_Solutions/RealEstate_Management/Section_a'
import Footer from './components/Footer'
import Section_b from './Our_Solutions/RealEstate_Management/Section_b'
import Section_c from './Our_Solutions/RealEstate_Management/Section_c'
import Section_d from './Our_Solutions/RealEstate_Management/Section_d'
import Section_e from './Our_Solutions/RealEstate_Management/Section_e'

const RealEstate_Management = () => {
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

export default RealEstate_Management