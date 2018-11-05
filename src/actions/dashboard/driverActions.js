import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../../constants/index';
import {saveLogged, saveToken} from "../../../utils";

function driverCreateRidection(user,history) {

    user.loader= true;

    return dispatch => {

        return axios.post(API_URLS.CREATE_RIDE,
            user
        ).then(response => {
            notify.show(response.data.message.toString(), 'success', 6000);
            saveToken(response.data.token);
            saveLogged(1);
            history.push(`/dashboard-driver`);

        }).catch(error => {
            notify.show('Invalid email or password', 'error', 4000);
        });
    };
}
export default driverCreateRidection;
