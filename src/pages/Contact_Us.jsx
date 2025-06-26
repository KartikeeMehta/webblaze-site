import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Contact_Us/Section_a'
import Section_b from './Contact_Us/Section_b'
import Section_c from './Contact_Us/Section_c'

const Contact_Us = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />
            <Section_c />
            <Footer />
        </div>
    )
}

export default Contact_Us