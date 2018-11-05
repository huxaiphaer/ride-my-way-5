import React from "react";
import {Navbar, NavItem} from 'react-materialize'

const brandColor = <span style={{color: "#FFFFFF", marginLeft: '10px'}}>Ride My Way</span>;
export const NavigationBar = ()=>(

    <Navbar  className={`Header purple`}  brand={brandColor} right>
        <NavItem href={'/login'}>Login</NavItem>
        <NavItem href='components.html'>About</NavItem>
    </Navbar>

);
