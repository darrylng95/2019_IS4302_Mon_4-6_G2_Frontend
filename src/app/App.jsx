import React, { Component } from 'react';
import 'sass/app.scss';
import RouterOutlet from 'router/RouterOutlet';

class App extends Component {

  render() {
    return (
      <div id="App">

            <RouterOutlet/>

      </div>
    );
  }
}

export default App;
