import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Our_Solutions/EV_charge/Section_a'
import Section_b from './Our_Solutions/EV_charge/Section_b'
import Section_c from './Our_Solutions/EV_charge/Section_c'
import Section_d from './Our_Solutions/EV_charge/Section_d'
import Section_e from './Our_Solutions/EV_charge/Section_e'

const EV_charge = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_e />
      <Footer />
    </div>
  )
}

export default EV_charge
