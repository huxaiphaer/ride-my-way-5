import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {DetailsPage} from "../../../containers/dashboard/detailsPage";

jest.mock('react-notify-toast');

const store = configureStore([thunk])({});

describe('shallow render details page', () => {

    let wrapper;


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




});
