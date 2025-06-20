import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './services/Linux-Admin/Section_a'
import Section_b from './services/Linux-Admin/Section_b'
import Section_c from './services/Linux-Admin/Section_c'
import Section_d from './services/Linux-Admin/Section_d'
import Section_e from './services/Linux-Admin/Section_e'
import Section_f from './services/Linux-Admin/Section_f'

const Linux_admin = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a/>
      <Section_b />
      <Section_c />
      <Section_d />
      <Section_e />
      <Section_f />

      <Footer />
    </div>
  )
}

export default Linux_admin
