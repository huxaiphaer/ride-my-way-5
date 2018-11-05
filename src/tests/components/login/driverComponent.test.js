import React from 'react';
import {shallow} from 'enzyme';
import {DriverComponent} from "../../../components/dashboard/viewDriver";
import {LoginComponent} from "../../../components/auth/login/viewLogin";

jest.mock('react-notify-toast');

describe('render loginComponent', () => {



    it('should create a ride with an error', () => {
        shallow(
            <DriverComponent
                handleSubmit={jest.fn()}
                handleChange={jest.fn()}
                obj={jest.fn()}
            />
        );

    });

    it('should render login component', () => {
        shallow(
            <LoginComponent
                handleSubmit={jest.fn()}
                handleChange={jest.fn()}
                handleRadiobuttonChange={jest.fn()}
                obj={jest.fn()}
            />
        );

    });




});
