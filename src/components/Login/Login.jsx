import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/auth_reducer';
import LoginReduxForm from '../UI/Form/LoginForm/LoginForm';

const Login = ({login, isAuth}) => {
	const onSubmit = (formData) => {
		login(formData.email, formData.password, formData.rememberMe)
	}

  if (isAuth) {
    return <Navigate to={'/profile'} ></Navigate>
  }
    return (
      <div>
          <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
        
    );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);