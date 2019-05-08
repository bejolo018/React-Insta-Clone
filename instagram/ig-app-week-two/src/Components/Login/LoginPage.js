import React from 'react';
import { Button, FormGroup, Input} from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            username='',
            password=''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render (){
        return (
            <form className='login-form'>
            <h3>Welcome To Instagram!</h3>
            <p>Please Login</p>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />

            <br />
            <Button color='success' size ='large' onClick={this.handleLoginSubmit}>
            Log In
            </Button>
            </FormGroup>
            </form>
        )
    }
}

export default Login