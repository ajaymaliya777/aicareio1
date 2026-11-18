import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Hook that returns a ref to attach to a component and animation props
 * that trigger when the element enters the viewport.
 * Usage:
 *   const { ref, animation } = useScrollReveal();
 *   <motion.div ref={ref} animate={animation}>...</motion.div>
 */
export const useScrollReveal = (options?: {
  hidden?: { opacity?: number; y?: number; scale?: number };
  visible?: { opacity?: number; y?: number; scale?: number };
  transition?: any;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const hidden = options?.hidden ?? { opacity: 0, y: 30 };
  const visible = options?.visible ?? { opacity: 1, y: 0 };
  const transition = options?.transition ?? { duration: 0.6, ease: 'easeOut' };

  useEffect(() => {
    if (inView) {
      controls.start({ ...visible, transition });
    }
  }, [controls, inView, visible, transition]);

  return { ref, animation: controls, hidden };
};
