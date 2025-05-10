import React, { useEffect } from 'react'
import HeroSection from "./HeroSection"
import About from "./About"
import Features from "./Features";
import Services from "./Services";
import Counter from "./Counter";
import Reviews from "./Reviews";
import ScrollIndicator from '../../components/ScrollIndicator'

function Home() {

    return (
        <>
            <ScrollIndicator sections={['top', 'about', 'features', 'services', 'counter', 'reviews']} />
            <HeroSection />
            <About />
            <Features />
            <Services />
            <Counter />
            <Reviews />
        </>
    )
}

export default Home
