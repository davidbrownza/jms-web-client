import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../../static/img/offline_user.png';

// import {
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarToggler,
//   NavbarBrand,
//   Badge
// } from 'reactstrap';

class Page extends Component {
    render() {
        return (
            <div id="wrapper">
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
                
                    <div style={{"color": "white", "padding": "15px 50px 5px 50px", "float": "right", "fontSize": "16px"}}> 
                        <a href="/account/logout" className="btn btn-danger square-btn-adjust">Logout</a> 
                    </div>
                </nav>
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">                        
                            <li className="text-center">
                                <a href="#profile" style={{"fontSize": "12pt", "color": "white"}}>
                                    Welcome, User! <br/>
                                    <img src={user} alt="User" className="user-image img-responsive"/>
                                </a>
                            </li>          
                            <li id="dashboard-menu-item">
                                <a href="/"><FontAwesomeIcon icon="tachometer-alt"/> Dashboard</a>
                            </li>                          
                            <li id="tool-menu-item">
                                <a href="/tools"><FontAwesomeIcon icon="wrench"/> Tools</a>
                            </li>                         
                            <li id="workflow-menu-item">
                                <a href="/workflows"><FontAwesomeIcon icon="sitemap" /> Workflows</a>
                            </li>          
                            <li id="job-menu-item" >
                                <a href="/jobs"><FontAwesomeIcon icon="tasks" /> Job History</a>
                            </li>                                            
                            <li id="settings-menu-item">
                                <a href="/settings"><FontAwesomeIcon icon="cog"/> Cluster Management</a>
                            </li>                       
                        </ul>                
                    </div>                
                </nav> 
                <div id="page-wrapper" className="page-wrapper">
                    <div id="page-inner" className="page-inner">                        
                        <div className="row">
                            <div className="col-md-12">
                            <h2>Blank Page</h2>   
                                <h5>Welcome John Doe, good to see you back. </h5>		                   
                            </div>
                        </div>                        
                        <hr />                    
                    </div>
                </div>
            </div>
        );
      }
}

export default Page;