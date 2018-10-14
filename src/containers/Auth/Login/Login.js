import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import LoginPage from '../../../components/LoginPage';

import { login } from  '../../../app/auth/actions';
import { authErrors, isAuthenticated, isAuthenticating } from '../../../app/reducer';

const Login = (props) => {
    console.log('login');
    console.log('login isAuthenticated: ' + props.isAuthenticated);
    return props.isAuthenticated ?
        <Redirect to='/' /> :
        <LoginPage {...props}/>
}

const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticating: isAuthenticating(state),
    isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => {
        dispatch(login(username, password))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);