import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../constants";
import {requestLoadingAction} from "../auth/login/loaderAction";
import ACTION_TYPE from "../actionTypes";



export const fetchRides = (response) => ({
    'type': ACTION_TYPE.START_GET_RIDES,
    'payload': response.data
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

         dispatch(fetchRides(response.data.ride_offers));
        dispatch(requestLoadingAction(false));

    }).catch(error => {
        notify.show('Error while creating a ride.', 'error', 4000);
        dispatch(requestLoadingAction(false))
    });

}
export default rideCreateAction;
