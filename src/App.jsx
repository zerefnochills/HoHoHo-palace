import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import QuickNav from './components/QuickNav';
import DynamicBackground from './components/DynamicBackground';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Personalize from './components/Personalize';
import Countdown from './components/Countdown';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen relative">
            {/* Fixed Midnight Background with Snowfall */}
            <DynamicBackground />

            {/* Navigation */}
            <Navbar />
            <QuickNav />

            {/* Main Content - Continuous flow */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div id="hero">
                    <Hero />
                </div>

                {/* Categories Section */}
                <div id="categories">
                    <Categories />
                </div>

                {/* Products Section */}
                <div id="products">
                    <Products />
                </div>

                {/* Personalize Section */}
                <div id="personalize">
                    <Personalize />
                </div>

                {/* Countdown Section */}
                <div id="countdown">
                    <Countdown />
                </div>

                {/* Testimonials Section */}
                <div id="testimonials">
                    <Testimonials />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
