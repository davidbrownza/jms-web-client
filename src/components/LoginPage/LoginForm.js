import React, {Component} from 'react';

import {Form, Input, Button} from 'reactstrap';

class LoginForm extends Component {
    render() {
        return (                      
             <Form className="form-signin" method="POST">
                <Input type="text" placeholder="Email" name="email" className="form-control" style={{"marginBottom": "2px"}}/>
                <Input type="password" placeholder="Password" name="password" className="form-control" style={{"marginBottom": "10px"}}/>
                <Button className="btn btn-lg btn-primary btn-block">Sign In</Button>	
             </Form>
        );
      }
}

export default LoginForm;