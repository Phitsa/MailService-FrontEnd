import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-500 focus:border-cerise rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rosepompaduor ${className}`}
      {...props}
    />
  );
};

export default Input;