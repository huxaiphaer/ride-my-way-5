import {requestLoadingAction} from "../../../../actions/auth/login/loaderAction";
import ACTION_TYPE from "../../../../actions/actionTypes";

describe('login action creator.', () => {

    const response = {
        data: {}
    };

    const responseData = {"isRequestLoading": {"data": {}}, "type": "REQUEST_LOADING"}

    it('should return action type and payload', () => {
        expect(requestLoadingAction(response)).toEqual(responseData);
    });



});
