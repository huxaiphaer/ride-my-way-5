import React from 'react';
import {shallow} from 'enzyme';
import {GetRidesComponent} from "../../../components/dashboard/viewgetRides";
import {GetRideDetails} from "../../../components/dashboard/viewrideDetails";

jest.mock('react-notify-toast');

describe('render get rides', () => {

    it('should create a ride wit', () => {

        shallow(
            <GetRidesComponent
                rides={[]}
            />
        );

    });

    it('should render GetRideDetails', () => {

        shallow(
            <GetRideDetails
                handleSubmit={jest.fn()}
                singleride={{}}
            />
        );
    });
});
