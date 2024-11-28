import React from 'react';
import clsx from 'clsx';

export const Label = ({ children, className, ...props }) => {
  return (
    <label
      className={clsx('block text-sm font-medium text-gray-700', className)}
      {...props}
    >
      {children}
    </label>
  );
};
