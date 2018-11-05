import {combineReducers} from 'redux';
import signupReducer from './authReducers/signupReducer';
import Loginreducer from "./authReducers/loginReducer";
import {requestLoadingReducer} from "./loaderReducer";
import RideReducer from "./rides/ridesReducer";

const reducers = combineReducers({
    users: signupReducer,
    Loginreducer,
    requestLoadingReducer,
    rides: RideReducer

});

export default reducers;
