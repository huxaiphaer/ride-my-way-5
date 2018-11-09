import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {GetRideRequests} from "../../../containers/dashboard/getRideRequests";
import {DetailsPage} from "../../../containers/dashboard/detailsPage";

jest.mock('react-notify-toast');

const store = configureStore([thunk])({});

describe('shallow render details page', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Provider store={store}>
                <GetRideRequests dispatch={store.dispatch} />
            </Provider>
        );
    });


    // it('render login components functions.', () => {
    //     wrapper = shallow(
    //         <DetailsPage rides={[{}]} dispatch={store.dispatch} />
    //     );
    //
    //     wrapper.instance().handleSubmit({preventDefault: jest.fn});
    //     wrapper.instance().handleChange({target: {name: 'userName', value: 'huxy'}});
    //
    // });

    it('render login components functions.', () => {

        const rides ={rides:{rides:[]}}
        wrapper = mount(
            <GetRideRequests rides={rides}
                             handleSubmit={jest.fn()}
                             handleChange={jest.fn()}
                             dispatch={store.dispatch}
                             rideRequestCreateAction={jest.fn()} />
        );

    });

    it('renders details age.', () => {

        const rides ={rides:{rides:[]}}
        wrapper = mount(
            <DetailsPage singleRideReducer={rides}
                             match={{params: {id: ''}}}
                             handleSubmit={jest.fn()}
                             handleChange={jest.fn()}
                             dispatch={store.dispatch}
                           />
        );

        wrapper.instance().handleSubmit({preventDefault: jest.fn});

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

});
