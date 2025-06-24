import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './Our_Solutions/Hospital_manage/Section_a'
import Section_b from './Our_Solutions/Hospital_manage/Section_b'
import Section_c from './Our_Solutions/Hospital_manage/Section_c'
import Section_d from './Our_Solutions/Hospital_manage/Section_d'
import Section_e from './Our_Solutions/Hospital_manage/Section_e'

const Hospital_manage = () => {
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

export default Hospital_manage
