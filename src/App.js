import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./route/Home/home";
import { Login } from "./route/Login/login";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route path="/" exact render={() => <Home />} />
          <Route path="/login" exact render={() => <Login />} />

          {/* <Home /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
