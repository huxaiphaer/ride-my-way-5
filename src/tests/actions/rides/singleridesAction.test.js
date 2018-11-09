import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../../constants";
import {singleRideAction} from "../../../actions/rides/singleRideAction";
const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
notify.show = jest.fn();


let store;

describe('create a single ride with details', () => {

    beforeEach(() => {
        moxios.install();
        store = mockStore({});
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should create a single ride.', () => {
        moxios.stubRequest(API_URLS.GET_SINGLE_RIDE+'1', {
            status: 201
        });

        const expectedActions =   [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]


        return store.dispatch(singleRideAction(1)
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

});
