import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Our_Solutions/CarPooling_App/Section_a'
import Section_b from './Our_Solutions/CarPooling_App/Section_b'


const CarPooling_App = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a/>
            <Section_b/>
            <Footer />
        </div>
    )
}

export default CarPooling_App;