import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Section_a from './BlockChain/SmartContainDeV/Section_a'
import Footer from './components/Footer'
import Section_b from './BlockChain/SmartContainDeV/Section_b'
import Section_c from './BlockChain/SmartContainDeV/Section_c'

const SmartContain = () => {
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

export default SmartContain