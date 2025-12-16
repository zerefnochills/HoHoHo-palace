import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import QuickNav from './components/QuickNav';
import DynamicBackground from './components/DynamicBackground';
import FlyingSanta from './components/FlyingSanta';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Personalize from './components/Personalize';
import Countdown from './components/Countdown';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    // Simple fade-in animation - much lighter than rotation
    const fadeInVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            }
        }
    };

    return (
        <div className="min-h-screen relative">
            {/* Dynamic Time-of-Day Background */}
            <DynamicBackground />

            {/* Flying Santa */}
            <FlyingSanta />

            {/* Navigation */}
            <Navbar />
            <QuickNav />

            {/* Optimized Sections - Simple Fade In */}
            <div className="relative z-10">
                {/* Hero Section */}
                <motion.div
                    id="hero"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Hero />
                </motion.div>

                {/* Categories Section */}
                <motion.div
                    id="categories"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Categories />
                </motion.div>

                {/* Products Section */}
                <motion.div
                    id="products"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Products />
                </motion.div>

                {/* Personalize Section */}
                <motion.div
                    id="personalize"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Personalize />
                </motion.div>

                {/* Countdown Section */}
                <motion.div
                    id="countdown"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Countdown />
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    id="testimonials"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Testimonials />
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <Footer />
                </motion.div>
            </div>
        </div>
    );
}

export default App;
