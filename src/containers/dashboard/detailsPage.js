import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {GetRideDetails} from "../../components/dashboard/viewrideDetails";


export class DetailsPage extends React.Component {

    render() {

        return (
            <div>
                <GetRideDetails/>
            </div>
        );
    }
}

DetailsPage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapDispatchToProps) (DetailsPage);
