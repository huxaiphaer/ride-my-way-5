import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../constants";
import {requestLoadingAction} from "../auth/login/loaderAction";

export const driverCreateRideAction =(user, history) => dispatch => {

        dispatch(requestLoadingAction(true));

        let config = {
            headers: {
                token: localStorage.getItem('token'),
            }
        }

        return axios.post(API_URLS.CREATE_RIDE,
            user, config
        ).then(response => {
            notify.show(response.data.message, 'success', 6000);
             // history.push(`/`);
            dispatch(requestLoadingAction(false))

        }).catch(error => {
            notify.show('Error while creating a ride.', 'error', 4000);
            dispatch(requestLoadingAction(false))
        });

}
export default driverCreateRideAction;
