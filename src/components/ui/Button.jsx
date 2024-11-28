import React from 'react'
import clsx from 'clsx'

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition'
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border text-white border-gray-300 hover:text-gray-700 hover:bg-gray-100',
    ghost: 'text-gray-700 hover:bg-gray-200',
    default: 'bg-green-400 text-black',
  }
  const sizes = {
    sm: 'px-4 py-1 text-[1.0rem]',
    md: 'px-4 py-2 text-[1.3rem]',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}>
      {children}
    </button>
  )
}
