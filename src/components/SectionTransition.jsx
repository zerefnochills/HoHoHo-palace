import React from 'react';
import { motion } from 'framer-motion';

const SectionTransition = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.6, 0.05, 0.01, 0.9],
            }}
        >
            {children}
        </motion.div>
    );
};

export default SectionTransition;
