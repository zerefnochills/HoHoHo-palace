import React from 'react';
import { motion } from 'framer-motion';

const DynamicBackground = () => {
    // Generate continuous snowflakes
    const snowflakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 10}s`,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.4,
    }));

    return (
        <>
            {/* Fixed Midnight Background */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    background: 'linear-gradient(to bottom, #0B132B 0%, #1e1b4b 50%, #312e81 100%)',
                }}
            />

            {/* Continuous Falling Snowflakes */}
            <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
                {snowflakes.map((flake) => (
                    <div
                        key={flake.id}
                        className="snowflake absolute rounded-full bg-white"
                        style={{
                            left: flake.left,
                            width: `${flake.size}px`,
                            height: `${flake.size}px`,
                            opacity: flake.opacity,
                            animationDuration: flake.animationDuration,
                            animationDelay: flake.animationDelay,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default DynamicBackground;
