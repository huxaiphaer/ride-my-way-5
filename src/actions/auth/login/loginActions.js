import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../../constants/index';
import {getisLoggedIn, saveLogged, saveToken} from "../../../utils";

function userLoginAction(user,history) {

    user.loader= true;

    return dispatch => {

        return axios.post(API_URLS.LOGIN,
            user
        ).then(response => {
            notify.show(response.data.message.toString(), 'success', 6000);
            saveToken(response.data.token);
            saveLogged(1);
            history.push(`/dashboard-driver`);
            console.log('check logged ',getisLoggedIn());

        }).catch(error => {
            notify.show('Invalid email or password', 'error', 4000);
        });
    };
}
export default userLoginAction;
