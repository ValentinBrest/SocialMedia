import React from 'react';
import { Form } from 'react-final-form';

const LoginFormRFF = () => {
  return (
    <Form onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>

          <button type='submit'>Submit</button>
        </form>
      )}
    </Form>
  );
};

export default LoginFormRFF;