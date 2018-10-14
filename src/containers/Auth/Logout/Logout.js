import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { logout } from  '../../../app/auth/actions';

const Logout = (props) => {
    props.logout();
    return <Redirect to={{ pathname: '/login'}}/>;
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout());
    }
});

export default connect(null, mapDispatchToProps)(Logout);
