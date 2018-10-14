import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../app/reducer';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return <Route {...rest} render={props => (
        isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{ pathname: 'login'}} />
    )} />
};

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);