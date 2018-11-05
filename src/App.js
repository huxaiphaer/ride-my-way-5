import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {NavigationBar} from "./components/navbar/navabar";
import  SignUp from './containers/signUp'
import Notification from 'react-notify-toast';
import {Provider} from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
              <div>
                  <NavigationBar/>
                  <Notification />
                  <Router>
                      <Switch>
                          <Route path='/' component={SignUp} exact />
                      </Switch>
                  </Router>
              </div>
        </Provider>
    );
  }
}

export default App;
