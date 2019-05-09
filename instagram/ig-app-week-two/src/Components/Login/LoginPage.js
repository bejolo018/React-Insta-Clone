import React, {Component} from 'react';
import { Button, FormGroup, Input, Form} from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            // username:'',
            // password:''
        }
    }

    handleLoginChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render (){
        return (
            <Form className='login-form'>
            <h3>Welcome To Instagram!</h3>
            <p>Please Login</p>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleLoginChange}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleLoginChange}
                    />

            <br />
            <Button color='success' size ='large' onClick={this.handleLoginSubmit}>
            Log In
            </Button>
            </FormGroup>
            </Form>
        )
    }
}

export default Login