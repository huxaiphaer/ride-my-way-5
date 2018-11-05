import {combineReducers} from 'redux';
import signupReducer from './authReducers/signupReducer';

const reducers = combineReducers({
    users: signupReducer,

});

export default reducers;
