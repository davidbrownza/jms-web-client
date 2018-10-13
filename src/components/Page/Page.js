import React, {Component} from 'react';

import Sidebar from '../Sidebar';
import ContentWrapper from './ContentWrapper';
import ProfileView from '../../views/ProfileView';

import { Route, Switch, Redirect } from 'react-router-dom';

class Page extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/profile" component={ProfileView}/>
                        <Redirect from="/" to="/profile"/>
                    </Switch>
                </ContentWrapper>
            </div>
        );
      }
}

export default Page;