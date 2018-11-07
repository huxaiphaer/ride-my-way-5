import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {DriverPage} from "../../containers/dashboard/driverPage";

jest.mock('react-notify-toast');

const store = configureStore([thunk])({});

describe('shallow render driverpage', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Provider store={store}>
                <DriverPage data={{}} dispatch={store.dispatch} />
            </Provider>
        );
    });

    it('render login components functions.', () => {
        wrapper = shallow(
            <DriverPage data={{}} dispatch={store.dispatch} />
        );

        wrapper.instance().handleSubmit({preventDefault: jest.fn});
        wrapper.instance().handleChange({target: {name: 'userName', value: 'huxy'}});

    });



});

