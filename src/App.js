import React, {Component} from 'react';
import {Provider} from 'react-redux'
import Layout from './components/Layout';

import { store } from './app/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faWrench, 
  faSitemap,
  faTasks,
  faCog,
  faTachometerAlt,
  faUser,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faWrench);
library.add(faSitemap);
library.add(faTasks);
library.add(faCog);
library.add(faTachometerAlt);
library.add(faUser);
library.add(faUserAlt);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout/>
            </Provider>
        );
    }
}

export default App;
