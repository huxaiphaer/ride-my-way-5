import ACTION_TYPE from "../../actions/actionTypes";
import singleRideReducer from "../../reducers/rides/singleRideReducer";

describe('get requests', () => {

    it('should test  get requests', () => {
        const initialState = {
        };
        const expected = {"rides": {}}
        const action = {type: ACTION_TYPE.START_GET_RIDES, payload: {}};
        expect(singleRideReducer(initialState, action)).toEqual(expected);
    });
});
