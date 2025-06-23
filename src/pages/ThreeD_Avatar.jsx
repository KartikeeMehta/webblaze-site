import React from 'react'
import Footer from './components/Footer'
import Annoucement_bar from './Home/Annoucement_bar'
import Header from './components/Header'
import Section_a from './3d_Animation/3d_Avatar/Section_a'
import Section_b from './3d_Animation/3d_Avatar/Section_b'
import Section_c from './3d_Animation/3d_Avatar/Section_c'
import { Section_d } from './3d_Animation/3d_Avatar/Section_d'
import Section_e from './3d_Animation/3d_Avatar/Section_e'
import Section_f from './3d_Animation/3d_Avatar/Section_f'
import Section_g from './3d_Animation/3d_Avatar/Section_g'
import Section_h from './3d_Animation/3d_Avatar/Section_h'
import Section_i from './3d_Animation/3d_Avatar/Section_i'

const ThreeD_Avatar = () => {
  return (
    <div>
      <Annoucement_bar />
      <Header />
      <Section_a />
      <Section_b/>
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

export default ThreeD_Avatar;