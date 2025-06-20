import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Footer from './components/Footer'
import Section_a from './services/Linux-Admin/Section_a'

const Linux_admin = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a/>
      <Footer />
    </div>
  )
}

export default Linux_admin
