import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../../constants/index';
import {messageRegistration} from "./signupActionCreator";
import {requestLoadingAction} from "../login/loaderAction";

function userSignUpAction(user, history) {

    return dispatch => {
        dispatch(requestLoadingAction(true));
        return axios.post(API_URLS.SIGN_UP,
            user
        ).then(response => {
            dispatch(messageRegistration(response));
            notify.show(response.data.message.toString(), 'success', 6000);
            history.push(`/login`);
            dispatch(requestLoadingAction(false));

        }).catch(error => {
            notify.show(error.toString(), 'error', 4000);
            dispatch(requestLoadingAction(false));
        });
    };
}
export default userSignUpAction;
