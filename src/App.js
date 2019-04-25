import React, { Component } from 'react';
import Nav from './components/Nav';
import Pay from './components/Pay';


class App extends Component {
  render() {

    return (
        <div>
          <Nav/>
          <Pay/>
        </div>
    );
  }
}

export default App;
