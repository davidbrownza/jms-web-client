import React, {Component} from 'react';
import Navbar from '../Navbar';
import Login from '../../containers/Auth/Login';
import Logout from '../../containers/Auth/Logout';
import Page from '../Page';

import PrivateRoute from '../../containers/Auth/PrivateRoute'

import { HashRouter, Route, Switch } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div id="wrapper">
                <Navbar/>
                <HashRouter>
                    <Switch>
                        <Route path="/login/" component={Login}/>
                        <Route path="/logout/" component={Logout}/>
                        <PrivateRoute path="/" component={Page}/>
                    </Switch>
                </HashRouter>                
            </div>
        );
      }
}

export default Layout;