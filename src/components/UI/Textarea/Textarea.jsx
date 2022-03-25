import React from 'react';
import cl from './Textarea.module.css'

const Textarea = React.forwardRef((props, ref) => {
    return (
        <textarea 
            onChange={props.onChange}
            ref={ref}
            className={`${cl.area} ${props.className}`} 
            placeholder={props.placeholder} 
            value={props.value}
        >
        </textarea>
    );
});

export default Textarea;