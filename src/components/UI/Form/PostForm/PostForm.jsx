import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import Button from '../../Button/Button';
import Textarea from '../../Textarea/Textarea';
import cl from './PostForm.module.css';

const maxLength10 = maxLengthCreator(10)

const PostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={cl.post}>
            <Field component={Textarea} 
                    name='newTextPost'  
                    placeholder='write something...'  
                    validate={[required, maxLength10]}
                    className={cl.field}
                />
            <Button>Send</Button>
        </form>
    );
};


const AddPostFormRedux = reduxForm({form: 'newPostForm'})(PostForm)

export default AddPostFormRedux;