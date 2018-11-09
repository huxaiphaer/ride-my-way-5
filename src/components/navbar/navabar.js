import React from "react";
import {Navbar, NavItem} from 'react-materialize'

const brandColor = <span style={{color: "#FFFFFF", marginLeft: '10px'}}>Ride My Way</span>;

export const NavigationBar = ({handleClick})=>{

    const loggedIn =localStorage.getItem('loggedIn');

return (    <Navbar  className={`Header purple`}  brand={brandColor} right>
          {loggedIn ==='1' ?
            <div>
                <NavItem href={'/dashboard-driver'}>Create Ride Request</NavItem>
                <NavItem href='/list-rides'>View Rides</NavItem>
                <NavItem href='/requests'>Ride Requests</NavItem>
                <NavItem onClick={handleClick}>Logout</NavItem>
            </div>
            :
            <div>
                <NavItem href={'/login'}>Login</NavItem>
                <NavItem href='components.html'>About</NavItem>
            </div>

        }

    </Navbar>
)}

export default NavigationBar

