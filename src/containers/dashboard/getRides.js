import React from 'react';
import {connect} from "react-redux";
import {GetRidesComponent} from "../../components/dashboard/viewgetRides";
import {rideCreateAction} from "../../actions/rides/rideActions";

class GetRides extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.rideCreateAction();
    }

    render() {
        const {ride} = this.props || {}
        console.log('all state -> ', ride);

        ride.map( r => console.log('Names', r.name))


            return (

                <div>
                    <GetRidesComponent />
                </div>
            );
        }
    }

const mapStateToProps = (state)=> {
    return {
        rides: state.rides
    }
}
export default connect(mapStateToProps, {rideCreateAction}) (GetRides);
