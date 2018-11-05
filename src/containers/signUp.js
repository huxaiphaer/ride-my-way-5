import React from 'react';
import {SignUpComponent} from "../components/signup/viewsignUp";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import userSignUpAction from "../actions/auth/signupActions";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            isdriver: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateSignUp()) {
         this.props.dispatch(userSignUpAction(this.state));
         console.log('my state -->', this.state);
        }
    };


    handleRadiobuttonChange =(event)=>{
        this.setState({
            isdriver : parseInt(event.target.value)
        });
    }

    validateSignUp(){

        this.setState({
            username: '',
            email: '',
            password: ''
        });
        const {username, email, password} = this.state;
        let foundError = false;

        if (username.length === 0) {
            this.setState({titleError: 'username is required'});
            foundError = true;

        } else if (email.length === 0) {
            this.setState({titleError: 'Password is required'});
            foundError = true;
        }

        if (password.length === 0) {
            this.setState({passwordError: 'Password is required', visible: false});
            foundError = true;
        } else if (password.length < 8) {
            this.setState({passwordError: 'Weak password, must be at least 8 characters', visible: false});
            foundError = true;
        } else if (password.search(/\d/) === -1) {
            this.setState({passwordError: 'Weak password, must have at least 1 digit', visible: false});
            foundError= true;
        } else if (password.search(/[a-zA-Z]/) === -1) {
            this.setState({passwordError: 'Weak password, must have at least 1 letter', visible: false});
            foundError = true;
        }

        return !foundError;
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {

        return (
            <div>
                <SignUpComponent
                handleSubmit={this.handleSubmit}
                obj={this.state}
                handleChange={this.handleChange}
                handleRadiobuttonChange={this.handleRadiobuttonChange}
                />
            </div>
        );
    }
}

SignUp.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapDispatchToProps) (SignUp);
// export {SignUp as SignupLoader};