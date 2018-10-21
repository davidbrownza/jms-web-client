import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import user from '../../static/img/offline_user.png';

class Sidebar extends Component {
    render() {
        return (
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <div class="text-center" style={{width: '100%'}}>
                        <div style={{fontSize:'12pt', color:'white'}}>
                            Welcome, User! <br/>
                            <img src={user} alt="User" className="user-image img-responsive"/>
                        </div>
                        <div style={{width: '100%', borderBottom: '1px solid rgba(107, 108, 109, 0.19)'}}>
                            <a href="#profile" style={{fontSize:'12pt', color:'white', paddingRight: '10px'}}>
                                <FontAwesomeIcon icon="user"/>
                            </a>
                            <a href="#/logout" style={{fontSize:'12pt', color:'white', paddingLeft: '10px'}} title="logout">
                                <FontAwesomeIcon icon="lock"/>
                            </a>
                        </div>
				    </div>
                    <ul className="nav" id="main-menu">              
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