import ACTION_TYPE from "../../actions/actionTypes";
import Loginreducer from "../../reducers/authReducers/loginReducer";

describe('Login reducers', () => {

    it('should test login reducer while starting', () => {
        const initialState = {
            visible: false,
            responseData: {},
            errorMessage: {}
        };
        const expected =   {"errorMessage": {}, "loader": true, "responseData": {}, "visible": false};
        const action = {type: ACTION_TYPE.LOGIN_START, payload: {}};
        expect(Loginreducer(initialState, action)).toEqual(expected);
    });

    it('should test login reducer while finishing', () => {
        const initialState = {
            visible: false,
            responseData: {},
            errorMessage: {}
        };
        const expected =  {"errorMessage": {}, "loader": false, "responseData": {}, "visible": false}
        const action = {type: ACTION_TYPE.LOGIN_FINISHED, payload: {}};
        expect(Loginreducer(initialState, action)).toEqual(expected);
    });


});
