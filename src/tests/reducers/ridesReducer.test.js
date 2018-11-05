import ACTION_TYPE from "../../actions/actionTypes";
import RideReducer from "../../reducers/rides/ridesReducer";

describe('rides', () => {

    it('should test rides', () => {
        const initialState = {
        };
        const expected =   {"rides": {}}
        const action = {type: ACTION_TYPE.START_GET_RIDES, payload: {}};
        expect(RideReducer(initialState, action)).toEqual(expected);
    });



});
