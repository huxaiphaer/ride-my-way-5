import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {Login} from "../../../containers/auth/login/loginPage";

jest.mock('react-notify-toast');

const store = configureStore([thunk])({});

describe('shallow render login', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
                <Provider store={store}>
                    <Login data={{}} dispatch={store.dispatch} />
                </Provider>
        );
    });


    it('render login components functions.', () => {
        wrapper = shallow(
                <Login data={{}} dispatch={store.dispatch} />
        );

         wrapper.instance().handleSubmit({preventDefault: jest.fn});
         wrapper.instance().handleChange({target: {name: 'userName', value: 'huxy'}});
         wrapper.instance().validateSignUp();

    });

    it('login without password less than 8 characters', () => {
        wrapper = mount(
            <Login data={{}} dispatch={store.dispatch} handleSubmit={jest.fn()}/>
        );
        const data = {
            username: 'hdhhdftdgtdtgd',
            password: 'hhh3',
            passwordError:''

        };

        wrapper.instance().setState({password:'yyu'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})


    });

    it('login without password only letters', () => {
        wrapper = mount(
            <Login data={{}} dispatch={store.dispatch} handleSubmit={jest.fn()}/>
        );
        const data = {
            username: 'hdhhdftdgtdtgd',
            password: 'hhh3',
            passwordError:''

        };

        wrapper.instance().setState({username:'hdhjhhfgh',password:'hbdhfbhdh'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})

    });

    it('login without password only alphabets', () => {
        wrapper = mount(
            <Login data={{}} dispatch={store.dispatch} handleSubmit={jest.fn()}/>
        );
        const data = {
            username: 'hdhhdftdgtdtgd',
            password: 'hhh3',
            passwordError:''

        };

        wrapper.instance().setState({username:'hdhjhhfgh',password:'12345678999'})
        wrapper.instance().handleSubmit({preventDefault: jest.fn})

    });



});

describe('Mount login', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Provider store={store}>
                <Login data={{}} dispatch={store.dispatch} />
            </Provider>
        );
    });


    it('render login components functions.', () => {
        wrapper = mount(
            <Login data={{}} dispatch={store.dispatch} />
        );

    });

});
