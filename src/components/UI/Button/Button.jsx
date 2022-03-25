import React from 'react';
import cl from './Button.module.css'



const Button = ({children, className, ...props}) => {
    return (
        <button  className={`${cl.button} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;