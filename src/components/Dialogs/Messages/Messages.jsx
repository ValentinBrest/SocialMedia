import React from 'react';
import cl from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={props.me? cl.messages: cl.me}>
            {props.text}
        </div>
    );
};

export default Messages;