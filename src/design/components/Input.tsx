import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../colors';
import { spacing } from '../spacing';
import { typography } from '../typography';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: spacing.md }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: spacing.xs,
            color: colors.textSecondary,
            fontFamily: typography.fontFamilySecondary,
            fontSize: typography.small,
          }}
        >
          {label}
        </label>
      )}
      <motion.input
        whileFocus={{ scale: 1.02, boxShadow: `0 0 8px ${colors.primary}` }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: spacing.sm,
          borderRadius: spacing.sm,
          border: `1px solid ${focused ? colors.primary : colors.border}`,
          background: colors.surface,
          color: colors.textPrimary,
          fontFamily: typography.fontFamilyPrimary,
          fontSize: typography.body,
          outline: 'none',
        }}
        {...rest}
      />
    </div>
  );
};
