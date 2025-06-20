import React from 'react'
import Section_a from './Digital_Marketing/GrowthMarketing/Section_a'
import Section_b from './Digital_Marketing/GrowthMarketing/Section_b'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'

const GrowthMarketing = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />
            <Footer />

        </div>
    )
}

export default GrowthMarketing