import ACTION_TYPE from "../../actions/actionTypes";
import GetRequestsReducer from "../../reducers/rides/getrideRequestsReducer";

describe('get requests', () => {

    it('should test  get requests', () => {
        const initialState = {
        };
        const expected = {"rides": {}}
        const action = {type: ACTION_TYPE.START_GET_RIDES, payload: {}};
        expect(GetRequestsReducer(initialState, action)).toEqual(expected);
    });
});
