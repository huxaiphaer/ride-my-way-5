import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import userLoginAction from "../../../../actions/auth/login/loginActions";
import {API_URLS} from "../../../../constants";
const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
notify.show = jest.fn();

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock;

const mockData = {

        username: 'huxy@andela.com',
        password: 'huxy@andela'
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

    it('should login a user', () => {
        moxios.stubRequest(API_URLS.LOGIN, {
            status: 201,
            response: mockData

        });

        const expectedActions = [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]

        return store.dispatch(userLoginAction(mockData)
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

        expect(localStorage.getItem).toBeCalledWith('token')

    });
});
