import React, {Component} from 'react';
import Navbar from '../Navbar';
import LoginPage from '../LoginPage';
import Page from '../Page';

import { HashRouter, Route, Switch } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div id="wrapper">
                <Navbar isAuthenticated={this.props.isAuthenticated}/>
                <HashRouter>
                    <Switch>
                        <Route path="/login/" component={LoginPage}/>
                        <Route path="/" component={Page}/>
                    </Switch>
                </HashRouter>                
            </div>
        );
      }
}

export default Layout;