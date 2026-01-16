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
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1600px] mx-auto ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default BentoGrid;
