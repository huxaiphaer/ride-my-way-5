import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../../constants/index';

function userLoginAction(user,history) {

    user.loader= true;

    return dispatch => {

        return axios.post(API_URLS.LOGIN,
            user
        ).then(response => {
            notify.show(response.data.message.toString(), 'success', 6000);
            user.loader= false;
            console.log('response ->', response.data.token)
            history.push(`/login`);
        }).catch(error => {
            notify.show('Invalid email or password', 'error', 4000);
        });
    };
}
export default userLoginAction;
