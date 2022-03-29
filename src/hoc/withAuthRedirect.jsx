import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthREdirect = (Compnent) => {
    class RedirectComponent extends Component {
        render() {
            if(!this.props.isAuth ) return  <Navigate to="/login"/>
            
            return <Compnent {...this.props} />
            
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
