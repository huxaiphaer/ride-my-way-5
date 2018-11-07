import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {NavigationBar} from "./components/navbar/navabar";
import  SignUp from './containers/auth/signup/signUp'
import Login from './containers/auth/login/loginPage'
import DriverPage from './containers/dashboard/driverPage';
import Notification from 'react-notify-toast';
import LoaderComponent from "./components/loader/loader";

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                    <NavigationBar/>
                    <Notification />
                    <LoaderComponent/>
                    <Switch>
                        <Route path='/' component={SignUp} exact />
                        <Route path='/login' component={Login}/>
                        <Route path='/dashboard-driver' component={DriverPage}/>
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
