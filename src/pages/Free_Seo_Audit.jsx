import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar';
import Header from './components/Header';
import Section_a from './Free_Seo_Audit/Section_a';
import Footer from './components/Footer';
import Section_b from './Free_Seo_Audit/Section_b';

const Free_Seo_Audit = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b/>
            <Footer />
        </div>
    )
}

export default Free_Seo_Audit;