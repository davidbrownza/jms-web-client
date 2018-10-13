import React, {Component} from 'react';

import PageHeading from '../../components/PageHeading';

import {Col} from 'reactstrap';

class ProfileView extends Component {
    render() {
        return (
            <Col sm="12">
                <PageHeading icon='user' text="Profile"/>
                <Col sm="12">

                </Col>
            </Col>           
        );
    }
}

export default ProfileView;