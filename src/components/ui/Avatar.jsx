import React from 'react';
import PropTypes from 'prop-types';

// The main Avatar wrapper component
export const Avatar = ({ children, size = '50px', className }) => {
  return (
    <div
      className={`avatar ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      {children}
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size: '50px',
  className: '',
};

// The component for the avatar image
export const AvatarImage = ({ src, alt }) => {
  return src ? (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  ) : null;
};

AvatarImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

AvatarImage.defaultProps = {
  alt: 'Avatar',
};

// The fallback content for the avatar
export const AvatarFallback = ({ fallbackText }) => {
  return (
    <span
      style={{
        fontSize: '16px',
        color: '#aaa',
      }}
    >
      {fallbackText}
    </span>
  );
};

AvatarFallback.propTypes = {
  fallbackText: PropTypes.string,
};

AvatarFallback.defaultProps = {
  fallbackText: 'N/A',
};
