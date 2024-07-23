'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      className='mb-12'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
