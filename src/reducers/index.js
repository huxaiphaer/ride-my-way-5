import {combineReducers} from 'redux';
import signupReducer from './authReducers/signupReducer';
import Loginreducer from "./authReducers/loginReducer";
import {requestLoadingReducer} from "./loaderReducer";
import RideReducer from "./rides/ridesReducer";
import singleRideReducer from "./rides/singleRideReducer";
import GetRequestsReducer from "./rides/getrideRequestsReducer";

const reducers = combineReducers({
    users: signupReducer,
    Loginreducer,
    requestLoadingReducer,
    rides: RideReducer,
    singleRide: singleRideReducer,
    getrequests:GetRequestsReducer

});

export default reducers;
