import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../../constants";
import {rideRequestCreateAction} from "../../../actions/rides/getrideRequestAction";
const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
notify.show = jest.fn();

let store;

describe('create ride action', () => {

    beforeEach(() => {
        moxios.install();
        store = mockStore({});
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should create a ride request', () => {
        moxios.stubRequest(API_URLS.GET_RIDE_REQUESTS+'huza', {
            status: 200
        });

        const expectedActions =  [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]

        return store.dispatch(rideRequestCreateAction('huza')
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

});
