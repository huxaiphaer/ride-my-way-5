import React from 'react';
import {connect} from "react-redux";
import {GetRidesComponent} from "../../components/dashboard/viewgetRides";
import {rideCreateAction} from "../../actions/rides/rideActions";

class GetRides extends React.Component {

    componentDidMount() {

        this.props.rideCreateAction();
    }


    render() {
        const {rides} = this.props;
            return (

                <div>
                    <GetRidesComponent rides={rides.rides.rides} obj={this.props.history} />
                </div>
            );
        }
    }

const mapStateToProps = (state)=> {
    return {
        rides: state
    }
}

export default connect(mapStateToProps, {rideCreateAction}) (GetRides);
