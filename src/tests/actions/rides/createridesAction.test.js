import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../../constants";
import rideRequestCreationAction from "../../../actions/rides/createRideRequestAction";
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
        moxios.stubRequest(API_URLS.CREATE_RIDE_REQUEST+'/1/requests', {
            status: 201
        });

        const expectedActions =   [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]


        return store.dispatch(rideRequestCreationAction(1,{})
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

});
