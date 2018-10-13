import React, {Component} from 'react';

import ContentInner from '../Page/ContentInner';
import LoginForm from './LoginForm';

import {Row, Col} from 'reactstrap';

class LoginPage extends Component {
    render() {
        return (                      
            <ContentInner>
                <Col sm="4"/>
                <Col sm="4">
                    <Row>
                        <Col md="12">
                            <h3>Login</h3>
				        	<h5>Please log in to access this server</h5>   
                        </Col>
                    </Row>			    
				    <span style={{"color": "maroon"}}>{this.props.error}</span>				        
				    <hr />	
                    <Row>
                        <Col md="12">
                            <LoginForm />
                            <br/>
                        </Col>
                    </Row>
                </Col>
                <Col sm="4"/>
            </ContentInner>  
        );
      }
}

export default LoginPage;