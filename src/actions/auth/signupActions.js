import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../constants';
import {messageRegistration} from "./signupActionCreator";

function userSignUpAction(user) {

    return dispatch => {
        return axios.post(API_URLS.SIGN_UP,
            user
        ).then(response => {
            dispatch(messageRegistration(response));
            console.log('message ->', response);
            notify.show(response.data.message.toString(), 'success', 6000);

        }).catch(error => {

            notify.show(error.toString(), 'error', 4000);
            console.log('message ->', error);

        });
    };
}
export default userSignUpAction;
