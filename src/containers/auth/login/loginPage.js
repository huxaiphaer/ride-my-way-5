import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {LoginComponent} from "../../../components/auth/login/viewLogin";
import userLoginAction from "../../../actions/auth/login/loginActions";


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameError:'',
            password: '',
            passwordError:'',
            loader: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }



    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateSignUp()) {
            this.props.dispatch(userLoginAction(this.state, this.props.history));

        }
    };


    validateSignUp(){

        this.setState({
            usernameError:'',
            passwordError:''
        });
        const {username, password} = this.state;
        let foundError = false;

        if (username.length === 0) {
            this.setState({usernameError: 'username is required'});
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
                <LoginComponent
                    handleSubmit={this.handleSubmit}
                    obj={this.state}
                    handleChange={this.handleChange}
                    loader={this.state.loader}
                />
            </div>
        );
    }
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({dispatch});



export default connect(mapDispatchToProps) (Login);
