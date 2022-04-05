import React from 'react';
import cl from './Textarea.module.css'


const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cl.post}>
            <textarea {...input} {...props} className={`${cl.textarea} ${hasError? cl.error : ''}`}/>
            {hasError && <span className={cl.span}>{meta.error}</span>}
        </div>  
    );
};

export default Textarea;