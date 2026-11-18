// Design system Card component with framer-motion
import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../colors';
import { spacing } from '../spacing';
import { typography } from '../typography';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverScale?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverScale = 1.02,
  style,
  ...rest
}) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale, boxShadow: `0 0 12px ${colors.primary}` }}
      whileTap={{ scale: hoverScale - 0.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        background: colors.surface,
        borderRadius: spacing.md,
        padding: spacing.md,
        color: colors.textPrimary,
        fontFamily: typography.fontFamilyPrimary,
        ...style,
        overflow: 'hidden',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
