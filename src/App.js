import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { URL } from "./route/route";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route path="/" exact component={URL.home.component} />
          <Route path="/login" exact component={URL.login.component} />
          <Route path="/register" exact component={URL.register.component} />

          {/* <Home /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
