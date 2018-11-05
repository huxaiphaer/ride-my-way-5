import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {NavigationBar} from "./components/navbar/navabar";
import  SignUp from './containers/signup/signUp'
import Login from './containers/login/loginPage'
import DriverPage from './containers/dashboard/driverPage';
import Notification from 'react-notify-toast';
import {Provider} from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
              <div>
                  <Notification />
                  <NavigationBar/>
                  <Router>
                      <Switch>
                          <Route path='/' component={SignUp} exact />
                          <Route path='/login' component={Login}/>
                          <Route path='/dashboard-driver' component={DriverPage}/>
                      </Switch>
                  </Router>
              </div>
        </Provider>
    );
  }
}

export default App;
