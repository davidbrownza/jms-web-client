import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{"marginBottom": 0}}>
                <div className="navbar-header">    
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">JMS</a>                         
                </div>    
            </nav>
        );
      }
}

export default Navbar;