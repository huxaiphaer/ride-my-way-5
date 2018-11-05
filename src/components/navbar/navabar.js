import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import {getisLoggedIn} from "../../utils";

const brandColor = <span style={{color: "#FFFFFF", marginLeft: '10px'}}>Ride My Way</span>;
export const NavigationBar = ()=>(

    <Navbar  className={`Header purple`}  brand={brandColor} right>
        {getisLoggedIn !==1 ?
            <div>
                <NavItem href={'/login'}>Login</NavItem>
                <NavItem href='components.html'>About</NavItem>
            </div>
            :
            <div>
                <NavItem href={'/login'}>Create Ride Request</NavItem>
                <NavItem href='components.html'>View Ride Requests</NavItem>
            </div>
        }

    </Navbar>

);
