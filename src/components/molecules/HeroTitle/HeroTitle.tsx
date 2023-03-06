import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Typewriter} from 'react-simple-typewriter';

interface Props {
  initialState: number;
}

const HeroTitle: React.FC<Props> = ({initialState}) => {

  return (
      <AnimatePresence>
          <Typewriter
            words={['Transforming startup ideas into market-ready entities']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </AnimatePresence>
  );
};

export {HeroTitle};
