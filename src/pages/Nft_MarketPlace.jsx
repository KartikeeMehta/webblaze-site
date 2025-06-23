import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './BlockChain/Ntf_MarkePlace/Section_a'
import Section_b from './BlockChain/Ntf_MarkePlace/Section_b'
import Section_c from './BlockChain/Ntf_MarkePlace/Section_c'
import Section_d from './BlockChain/Ntf_MarkePlace/Section_d'
import Section_e from './BlockChain/Ntf_MarkePlace/Section_e'

const Nft_MarketPlace = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_e/>
      <Footer />

    </div>
  )
}

export default Nft_MarketPlace