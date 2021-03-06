import React, { Component } from 'react';
import Notification from 'react-notify-toast';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {NavigationBar} from "./components/navbar/navabar";
import  SignUp from './containers/auth/signup/signUp'
import Login from './containers/auth/login/loginPage'
import DriverPage from './containers/dashboard/driverPage';
import GetRides from './containers/dashboard/getRides';
import DetailsPage from './containers/dashboard/detailsPage'
import GetRideRequests from './containers/dashboard/getRideRequests';
import LoaderComponent from "./components/loader/loader";

class App extends Component {



    handleClick=(e)=>{
        e.preventDefault();
        localStorage.clear();
        window.location.replace('/login');
    }

  render() {
    return (
            <Router>
                <div>
                    <main>
                        <NavigationBar handleClick={this.handleClick}/>
                        <Notification />
                        <LoaderComponent/>
                    <Switch>
                        <Route path='/' component={SignUp} exact />
                        <Route path='/login' component={Login}/>
                        <Route path='/dashboard-driver' component={DriverPage}/>
                        <Route path='/list-rides' component={GetRides}/>
                        <Route path='/details/:id' component={DetailsPage}/>
                        <Route path='/requests' component={GetRideRequests}/>
                    </Switch>
                    </main>
                </div>
            </Router>
    );
  }
}

export default App;
