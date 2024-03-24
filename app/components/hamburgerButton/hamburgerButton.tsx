import { SVGMotionProps, motion } from 'framer-motion';
import React from 'react';

type HamburgerButtonProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const HamburgerButton = ({ toggle, isOpen }: HamburgerButtonProps) => {
  return (
    <button onClick={toggle} className='cursor-pointer z-20'>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 0%)' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          stroke='hsl(0, 0%, 0%)'
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 0%)' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

const Path = (
  props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>
) => <motion.path fill='transparent' strokeLinecap='round' strokeWidth='3' {...props} />;
