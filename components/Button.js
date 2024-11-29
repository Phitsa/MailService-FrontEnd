import React from 'react';

const Button = ({ onClick, children, type = 'button', className = '' }) => {
    return (
        <button type={type} className={`${className}`} onClick={onClick}>
            {children}
        </button>
    );
};


export default Button;
