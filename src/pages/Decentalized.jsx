import React from 'react'
import Section_a from './BlockChain/Decentralized/Section_a'
import Section_b from './BlockChain/Decentralized/Section_b'
import Section_c from './BlockChain/Decentralized/Section_c'
import Section_d from './BlockChain/Decentralized/Section_d'
import Section_e from './BlockChain/Decentralized/Section_e'
import Section_f from './BlockChain/Decentralized/Section_f'
import Section_g from './BlockChain/Decentralized/Section_g'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'

function Decentalized() {
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

export default Decentalized
