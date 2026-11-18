import React from 'react';
import { motion } from 'framer-motion';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  style,
  ...rest
}) => {
  const bg = variant === 'primary' ? colors.primary : colors.secondary;
  const txt = colors.textPrimary;
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: `0 0 8px ${bg}` }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        background: bg,
        color: txt,
        border: 'none',
        borderRadius: spacing.sm,
        padding: `${spacing.sm} ${spacing.md}`,
        fontFamily: typography.fontFamilyPrimary,
        fontSize: typography.body,
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
