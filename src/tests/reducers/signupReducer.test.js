import ACTION_TYPE from "../../actions/actionTypes";
import reducer from "../../reducers/authReducers/signupReducer";

describe('Sign up reducers', () => {

    it('should test login reducer while starting', () => {
        const initialState = {
        };
        const expected = {"payload": {}, "visible": undefined}
        const action = {type: ACTION_TYPE.SIGNUP_START, payload: {}};
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should test sign up reducer while stopping', () => {
        const initialState = {
        };
        const expected =   {"visible": undefined}
        const action = {type: ACTION_TYPE.SIGNUP_STOP, payload: {}};
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should test sign up reducer while success', () => {
        const initialState = {
        };
        const expected =   {"payload": {}, "visible": false}
        const action = {type: ACTION_TYPE.SIGNUP_SUCCESS, payload: {}};
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should test sign up reducer while fail', () => {
        const initialState = {
        };
        const expected =   {"visible": false}
        const action = {type: ACTION_TYPE.SIGNUP_FAIL, payload: {}};
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should test sign up reducer while getting message', () => {
        const initialState = {
        };
        const expected =    {"message": undefined}
        const action = {type: ACTION_TYPE.MESSAGE, payload: {}};
        expect(reducer(initialState, action)).toEqual(expected);
    });

});
