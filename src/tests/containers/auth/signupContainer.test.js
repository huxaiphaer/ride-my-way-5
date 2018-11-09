import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {SignUp} from "../../../containers/auth/signup/signUp";
import {Login} from "../../../containers/auth/login/loginPage";

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

    it('render signup components functions.', () => {
        wrapper = shallow(
            <SignUp data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().handleSubmit({preventDefault: jest.fn});
        wrapper.instance().handleChange({target: {name: 'userName', value: 'huxy'}});
        wrapper.instance().validateSignUp();

    });

    it('signup password less than 8 characters ', () => {
        wrapper = mount(
            <SignUp data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().setState({email:'jhdghdhd@gh.com', username:'hdhjhhfgh',password:'yy56'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})
    });

    it('signup with empty email', () => {
        wrapper = mount(
            <SignUp data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().setState({email:'', username:'hdhjhhfgh',password:'yy56hfghfgfgfh'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})
    });

    it('signup with only letters in password', () => {
        wrapper = mount(
            <SignUp data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().setState({email:'hhsh@gd.com', username:'hdhjhhfgh',password:'gdgdgdgdgd'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})
    });

    it('signup with only numbers in password', () => {
        wrapper = mount(
            <SignUp data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().setState({email:'hhsh@gd.com', username:'hdhjhhfgh',password:'123456789'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})
    });

});

