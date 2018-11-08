import React from 'react';
import {connect} from "react-redux";
import {GetRideDetails} from "../../components/dashboard/viewrideDetails";
import {singleRideAction} from "../../actions/rides/singleRideAction";
import rideRequestCreationAction from "../../actions/rides/createRideRequestAction";


export class DetailsPage extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            passengername: localStorage.getItem('username'),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        const {id } = this.props.match.params;
        this.props.dispatch(singleRideAction(id));
    }


    handleSubmit = (event) => {
        const {id } = this.props.match.params;

        event.preventDefault();
            this.props.dispatch(rideRequestCreationAction(id, this.state));
    };


    render() {

        const {singleRideReducer} = this.props;
        return (

            <div>
                <GetRideDetails
                    handleSubmit={this.handleSubmit}
                    singleride={singleRideReducer.rides.rides}/>
            </div>
        );
    }
}

const singleRideReducer = (state)=> {
    return {
        singleRideReducer: state
    }
}

const mapDispatchToProps = dispatch => ({dispatch});
export default connect(singleRideReducer, mapDispatchToProps) (DetailsPage);
