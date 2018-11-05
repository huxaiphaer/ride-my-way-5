import ACTION_TYPE from "../../actions/actionTypes";
import {requestLoadingReducer} from "../../reducers/loaderReducer";

describe('loaders', () => {

    it('should test loaders', () => {
        const initialState = {
        };
        const expected = {}
        const action = {type: ACTION_TYPE.REQUEST_LOADING, payload: {}};
        expect(requestLoadingReducer(initialState, action)).toEqual(expected);
    });



});
