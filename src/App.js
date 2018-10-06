import React, { Component } from 'react';
import './static/css/App.css';

import Page from './components/Page';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faWrench, 
  faSitemap,
  faTasks,
  faCog,
  faTachometerAlt 
} from '@fortawesome/free-solid-svg-icons';

library.add(faWrench);
library.add(faSitemap);
library.add(faTasks);
library.add(faCog);
library.add(faTachometerAlt);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Page/>
      </div>
    );
  }
}

export default App;
