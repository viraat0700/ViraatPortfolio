import React from 'react';
import { motion } from 'framer-motion';

const BentoItem = ({ children, className = "", span = "", ...props }) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 lg:p-8 overflow-hidden relative group hover:border-zinc-600 transition-colors duration-300 ${span} ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default BentoItem;
