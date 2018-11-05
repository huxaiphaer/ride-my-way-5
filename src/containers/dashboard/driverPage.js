import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {DriverComponent} from "../../components/dashboard/viewDriver";

class DriverPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameError:'',
            details:'',
            detailsError:'',
            price: '',
            priceError:'',
            driver_name:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();

    };


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
