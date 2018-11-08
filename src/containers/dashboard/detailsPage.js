import React from 'react';
import {connect} from "react-redux";
import {GetRideDetails} from "../../components/dashboard/viewrideDetails";
import {singleRideAction} from "../../actions/rides/singleRideAction";


export class DetailsPage extends React.Component {

    componentDidMount() {

        const {id } = this.props.match.params;
        this.props.singleRideAction(id);
    }

    render() {

        const {singleRideReducer} = this.props;
        return (

            <div>
                <GetRideDetails singleride={singleRideReducer.rides.rides}/>
            </div>
        );
    }
}

const singleRideReducer = (state)=> {
    return {
        singleRideReducer: state
    }
}
export default connect(singleRideReducer, {singleRideAction}) (DetailsPage);
