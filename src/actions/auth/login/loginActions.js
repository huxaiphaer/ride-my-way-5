import axios from 'axios';
import {notify} from 'react-notify-toast';
import {API_URLS} from '../../../constants/index';
import {requestLoadingAction} from "./loaderAction";

function userLoginAction(user,history) {

    return dispatch => {

        dispatch(requestLoadingAction(true));
        return axios.post(API_URLS.LOGIN,
            user
        ).then(response => {
            notify.show(response.data.message.toString(), 'success', 6000);
            localStorage.setItem('loggedIn', '1');
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('username',user.username)
            history.push(`/dashboard-driver`);
            dispatch(requestLoadingAction(false));

        }).catch(error => {
            notify.show('Invalid email or password', 'error', 4000);
            dispatch(requestLoadingAction(false));
        });
    };
}
export default userLoginAction;
