import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import Button from '../../Button/Button';
import cl from './LoginForm.module.css';


const LoginForm = (props) => {
    return (
        <form className={cl.form} onSubmit={props.handleSubmit}>
            <div>
              <Field placeholder='Email' className={cl.login} name={'email'} component="input"/>
            </div>
            <div>
              <Field placeholder='Password' className={cl.password} name={'password'} type={"password"} component="input"/>
            </div>
            <div>
              <label htmlFor="rememberMe">remember me</label>
              <Field type="checkbox" className={cl.checkbox} id='rememberMe' name={'rememberMe'} component="input"/> 
            </div>
            <Button className={cl.login__button}>Login</Button>
          </form>
    );
};


const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm);

  export default LoginReduxForm