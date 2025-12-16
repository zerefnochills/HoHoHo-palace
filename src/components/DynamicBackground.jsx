import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicBackground = () => {
    const { scrollYProgress } = useScroll();

    // Map scroll progress to time of day (0 = night, 0.25 = dawn, 0.5 = day, 0.75 = dusk, 1 = night)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [
            'linear-gradient(to bottom, #0B132B 0%, #1e1b4b 50%, #312e81 100%)', // Night
            'linear-gradient(to bottom, #4c1d95 0%, #7c3aed 30%, #f97316 60%, #fbbf24 100%)', // Dawn
            'linear-gradient(to bottom, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)', // Day
            'linear-gradient(to bottom, #7c2d12 0%, #ea580c 30%, #fb923c 60%, #1e1b4b 100%)', // Dusk
            'linear-gradient(to bottom, #0B132B 0%, #1e1b4b 50%, #312e81 100%)', // Night again
        ]
    );

    return (
        <motion.div
            className="fixed inset-0 z-0"
            style={{ background: backgroundColor }}
        />
    );
};

export default DynamicBackground;
