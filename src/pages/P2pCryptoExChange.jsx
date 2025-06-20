import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Section_a from './BlockChain/P2p_CryptoExchange/Section_a'
import Footer from './components/Footer'
import Section_b from './BlockChain/P2p_CryptoExchange/Section_b'
import Section_c from './BlockChain/P2p_CryptoExchange/Section_c'
import Section_d from './BlockChain/P2p_CryptoExchange/Section_d'
import Section_e from './BlockChain/P2p_CryptoExchange/Section_e'
import Section_f from './BlockChain/P2p_CryptoExchange/Section_f'
import Section_g from './BlockChain/P2p_CryptoExchange/Section_g'
import Section_h from './BlockChain/P2p_CryptoExchange/Section_h'
import { Section } from 'lucide-react'
import Section_i from './BlockChain/P2p_CryptoExchange/Section_i'

const P2pCryptoExChange = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c/>
      <Section_d/>
      <Section_e/>
      <Section_f/>
      <Section_g/>
      <Section_h/>
      <Section_i/>
      <Footer />
    </div>
  )
}

export default P2pCryptoExChange