import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = ({ children, className = "" }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default BentoGrid;
