import React from 'react';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Projects from '../Projects';
import Edu from '../Edu';
import '../../App.css';

function Home() {
    return (
        <>

            <HeroSection />
            <Projects />
            <Edu />
            <Footer />
        </>
    )
}

export default Home;