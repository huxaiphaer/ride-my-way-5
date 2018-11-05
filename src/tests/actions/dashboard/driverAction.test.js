import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import {driverCreateRideAction} from "../../../actions/dashboard/createActions";
import {API_URLS} from "../../../constants";
const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
notify.show = jest.fn();

const mockData = {

    name: 'huxy@andela.com',
    details: 'huxy@andela',
    driver:'Huxy',
    price:'20000'
};

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
            status: 201,
            response: mockData

        });

        const expectedActions = [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]

        return store.dispatch(driverCreateRideAction(mockData)
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    it('should create a ride with an error', () => {
        moxios.stubRequest(API_URLS.CREATE_RIDE, {
            status: 400,
            response: mockData

        });

        const expectedActions = [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]

        return store.dispatch(driverCreateRideAction(mockData)
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
});
