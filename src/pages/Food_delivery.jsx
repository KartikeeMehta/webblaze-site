import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Our_Solutions/Food_delivery/Section_a'
import Section_b from './Our_Solutions/Food_delivery/Section_b'
import Section_c from './Our_Solutions/Food_delivery/Section_c'
import Section_d from './Our_Solutions/Food_delivery/Section_d'
import Section_e from './Our_Solutions/Food_delivery/Section_e'
import Section_f from './Our_Solutions/Food_delivery/Section_f'
import Section_g from './Our_Solutions/Food_delivery/Section_g'
import Section_h from './Our_Solutions/Food_delivery/Section_h'

const Food_delivery = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_e />
      <Section_f />
      <Section_g />
      <Section_h />
      <Footer />
    </div>
  )
}

export default Food_delivery
