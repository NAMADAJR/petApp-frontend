import React from 'react';
import clsx from 'clsx';

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        'w-full rounded-lg border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50',
        className
      )}
      {...props}
    />
  );
};
