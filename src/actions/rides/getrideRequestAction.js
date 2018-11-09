import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../constants";
import {requestLoadingAction} from "../auth/login/loaderAction";
import ACTION_TYPE from "../actionTypes";



export const fetchRideRequests = (response) => ({
    'type': ACTION_TYPE.START_GET_RIDES,
    'payload': response
});


export const rideRequestCreateAction =(username) => dispatch => {

    dispatch(requestLoadingAction(true));

    let config = {
        headers: {
            token: localStorage.getItem('token'),
        }
    }

    return axios.get(API_URLS.GET_RIDE_REQUESTS+username,
        config
    ).then(response => {
        dispatch(requestLoadingAction(false));

        const data = JSON.parse(response.data.ride_offers.replace(/'/g, "\""));
        dispatch(fetchRideRequests(data));

    }).catch(error => {
        notify.show('Sorry you have no ride requests.', 'error', 4000);
        dispatch(requestLoadingAction(false))
    });

};
export default rideRequestCreateAction;
