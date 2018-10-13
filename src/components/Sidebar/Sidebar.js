import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import user from '../../static/img/offline_user.png';

class Sidebar extends Component {
    render() {
        return (
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
        );
      }
}

export default Sidebar;