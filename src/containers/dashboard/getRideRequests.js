import React from 'react';
import {connect} from "react-redux";
import {GetRideRequestsComponent} from "../../components/dashboard/viewgetRideRequests";
import {rideRequestCreateAction} from "../../actions/rides/getrideRequestAction";

class GetRideRequests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('username')
        };
    }

    componentDidMount() {

        this.props.rideRequestCreateAction(this.state.username);
    }


    render() {
        const {rides} = this.props;
        return (

            <div>
                <GetRideRequestsComponent requests={rides.rides.rides} />
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        rides: state
    }
}

export default connect(mapStateToProps, {rideRequestCreateAction}) (GetRideRequests);
