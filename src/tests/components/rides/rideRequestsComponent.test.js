import React from 'react';
import {mount, shallow} from 'enzyme';
import {GetRideRequestsComponent} from "../../../components/dashboard/viewgetRideRequests";

jest.mock('react-notify-toast');

describe('render viewgetRideRequests', () => {

    it('should create a ride wit', () => {
      const  data =[{
            id:1,
            name:'huza',
            passengername: 'huza',
            time:'39939'
        }]
        shallow(
            <GetRideRequestsComponent
                requests={[]}
            />
        );

    });
});
