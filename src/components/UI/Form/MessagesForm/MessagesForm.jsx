import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import Button from '../../Button/Button';
import Textarea from '../../Textarea/Textarea';
import cl from './Textarea.module.css';

const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cl.form}>
            <Field component={Textarea} 
                    name='newMessageBody'  
                    placeholder={props.placeholder} 
                    className={`${cl.area} ${props.className}`} 
            />
            <Button>Send</Button>
        </form>
    );
};


const AddMessageFormRedux = reduxForm({form: "dialogMessageForm"}) (MessagesForm)

export default AddMessageFormRedux;