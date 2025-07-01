import React from 'react'
import Annoucement_bar from './Home/Annoucement_bar';
import Header from './components/Header';
import Section_a from './Blog/Section_a';
import Footer from './components/Footer';
import Section_b from './Blog/Section_b';

const Blog = () => {
    return (
        <div>
            <Annoucement_bar />
            <Header />
            <Section_a />
            <Section_b />

            <Footer />
        </div>
    )
}

export default Blog;