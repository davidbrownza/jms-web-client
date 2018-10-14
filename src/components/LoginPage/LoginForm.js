import React, {Component} from 'react';

import {Input, Button} from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({[name]: value});
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    render() {
        return (                      
             <div className="form-signin">
                <Input 
                    name="username" type="text" placeholder="Email" className="form-control" style={{"marginBottom": "2px"}} 
                    value={this.state.username} onChange={this.onInputChange}/>
                <Input 
                    name="password" type="password" placeholder="Password" className="form-control" style={{"marginBottom": "10px"}}
                    value={this.state.password} onChange={this.onInputChange}/>
                <Button className="btn btn-lg btn-primary btn-block" 
                    onClick={this.onSubmit} >Sign In</Button>	
             </div>
        );
      }
}

export default LoginForm;