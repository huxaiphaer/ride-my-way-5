import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import * as moxios from 'moxios';
import {notify} from 'react-notify-toast';
import {API_URLS} from "../../../../constants";
import userSignUpAction from "../../../../actions/auth/signup/signupActions";
const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
notify.show = jest.fn();

const mockData = {

    email:'huxy@andela.com',
    username: 'huxy@andela.com',
    password: 'huxy@andela'
};

let store;

describe('signup component', () => {

    beforeEach(() => {
        moxios.install();
        store = mockStore({});
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should signup a user', () => {
        moxios.stubRequest(API_URLS.SIGN_UP, {
            status: 401,
            response: mockData.data
        });

        const expectedActions = [{"isRequestLoading": true, "type": "REQUEST_LOADING"},
            {"isRequestLoading": false, "type": "REQUEST_LOADING"}]

        return store.dispatch(userSignUpAction(mockData, jest.fn())
        ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
});
