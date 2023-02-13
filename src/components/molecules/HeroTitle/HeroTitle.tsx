import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  visible: boolean;
  children: React.ReactNode
}

const HeroTitle: React.FC<Props> = ({visible, children}) => {

  return (
      <AnimatePresence>
        { visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
  );
};

export {HeroTitle};
