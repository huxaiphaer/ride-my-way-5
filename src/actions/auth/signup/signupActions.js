import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../../constants/index';
import {messageRegistration} from "./signupActionCreator";

function userSignUpAction(user, history) {

    user.loader= true;
    return dispatch => {
        return axios.post(API_URLS.SIGN_UP,
            user
        ).then(response => {
            dispatch(messageRegistration(response));
            notify.show(response.data.message.toString(), 'success', 6000);
            history.push(`/login`);
            user.loader = false;

        }).catch(error => {

            notify.show(error.toString(), 'error', 4000);
            user.loader = false;

        });
    };
}
export default userSignUpAction;
