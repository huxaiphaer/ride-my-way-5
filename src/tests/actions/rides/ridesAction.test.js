import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../../constants";
import {rideCreateAction} from "../../../actions/rides/rideActions";
const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
notify.show = jest.fn();


let store;

describe('login component', () => {

    beforeEach(() => {
        moxios.install();
        store = mockStore({});
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should create a ride', () => {
        moxios.stubRequest(API_URLS.CREATE_RIDE, {
            status: 200
        });

        const expectedActions =  [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]


        return store.dispatch(rideCreateAction()
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

});
