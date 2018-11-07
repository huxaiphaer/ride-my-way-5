import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {SignUp} from "../../../containers/auth/signup/signUp";

jest.mock('react-notify-toast');

const store = configureStore([thunk])({});

describe('shallow render signup', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Provider store={store}>
                <SignUp data={{}} dispatch={store.dispatch} />
            </Provider>
        );
    });

    it('render login components functions.', () => {
        wrapper = shallow(
            <SignUp data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().handleSubmit({preventDefault: jest.fn});
        wrapper.instance().handleChange({target: {name: 'userName', value: 'huxy'}});
        wrapper.instance().validateSignUp();

    });

    it('login without password less than 8 characters', () => {
        const data = {
            username: 'hdhhd',
            password: 'hhh',
            passwordError:''

        };

        wrapper.instance().setState(data);


    });

});

