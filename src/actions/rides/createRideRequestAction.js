import axios from 'axios';
import {notify} from 'react-notify-toast';
import {requestLoadingAction} from "../auth/login/loaderAction";
import {API_URLS} from "../../constants";

function rideRequestCreationAction(id,data) {

    let config = {
        headers: {
            token: localStorage.getItem('token'),
        }
    }

    return dispatch => {

        dispatch(requestLoadingAction(true));
        return axios.post(API_URLS.CREATE_RIDE_REQUEST+'/'+id+'/requests',
            data,config
        ).then(response => {

            notify.show(response.data.message.toString(), 'success', 6000);
            dispatch(requestLoadingAction(false));

        }).catch(error => {
            notify.show('Sorry,you already made a ride request.', 'error', 4000);
            dispatch(requestLoadingAction(false));
        });
    };
}
export default rideRequestCreationAction;
