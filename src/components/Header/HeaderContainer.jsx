import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { knowAuth } from '../../redux/auth_reducer';
import { userAPI } from '../../api/api';

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.knowAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {knowAuth}) (HeaderContainer);