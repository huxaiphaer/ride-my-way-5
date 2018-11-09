import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {GetRideRequests, mapStateToProps as Mapper} from "../../../containers/dashboard/getRideRequests";

jest.mock('react-notify-toast');

const store = configureStore([thunk])({});

describe('shallow render details page', () => {

    let wrapper;

    beforeEach(() => {
        const rides ={rides:{rides:[]}}
        wrapper = mount(
            <Provider store={store}>
                <GetRideRequests
                    rides={rides}
                    dispatch={store.dispatch}
                    rideRequestCreateAction={jest.fn()}/>
            </Provider>
        );
    });

    it('renders get rides 34', () => {
        const rides ={rides:{rides:[]}}
        wrapper = mount(
            <GetRideRequests
                rides={rides}
                dispatch={store.dispatch}
                rideRequestCreateAction={jest.fn()}
            />
        );
    });

    it('maps the state to the props', () => {
        const state = {
            rides:[]

        };
        const expectedProp =  {"rides": {"rides": []}}


        expect(Mapper(state)).toEqual(expectedProp);
    });
});
