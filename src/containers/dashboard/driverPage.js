import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {DriverComponent} from "../../components/dashboard/viewDriver";
import driverCreateRideAction from "../../actions/dashboard/createActions";

export class DriverPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameError:'',
            details:'',
            detailsError:'',
            price: '',
            priceError:'',
            driver_name: localStorage.getItem('username')
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(driverCreateRideAction(this.state, this.props.history));
        this.setState({name:'', details: '', price:''});
    };

    handleChange =(evt) => {
        this.setState({ [evt.target.name]: evt.target.value });

    }


    render() {

        return (
            <div>
                <DriverComponent
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    obj={this.state}
                />
            </div>
        );
    }
}

DriverPage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapDispatchToProps) (DriverPage);
