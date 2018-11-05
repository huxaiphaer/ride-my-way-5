import {combineReducers} from 'redux';
import signupReducer from './authReducers/signupReducer';
import Loginreducer from "./authReducers/loginReducer";

const reducers = combineReducers({
    users: signupReducer,
    Loginreducer

});

export default reducers;
