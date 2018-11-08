import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../constants";
import {requestLoadingAction} from "../auth/login/loaderAction";
import ACTION_TYPE from "../actionTypes";



export const fetchRides = (response) => ({
    'type': ACTION_TYPE.START_GET_RIDES,
    'payload': response
});


export const rideCreateAction =() => dispatch => {

    dispatch(requestLoadingAction(true));

    let config = {
        headers: {
            token: localStorage.getItem('token'),
        }
    }

    return axios.get(API_URLS.CREATE_RIDE,
        config
    ).then(response => {
        dispatch(requestLoadingAction(false));
        const data = JSON.parse(response.data.ride_offers.replace(/'/g, "\""));
        dispatch(fetchRides(data));


    }).catch(error => {
        notify.show('Error while fetching rides', 'error', 4000);
        dispatch(requestLoadingAction(false))
    });

};
export default rideCreateAction;
