import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { Home } from "./route/Home/home";
import { Login } from "./route/Login/login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            {/* <Route path="/cart" component={Cart}></Route>
            <Route path="/search" component={Search} />
            <Route path="/home" component={Main} />
            <Redirect from="/" to="/home"></Redirect>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/class" component={Class}></Route>
            <Route component={NoMatch}></Route> */}
          </Switch>
        </Router>
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
