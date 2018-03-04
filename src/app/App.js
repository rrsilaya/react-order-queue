import React, { Component } from 'react';

import Form from '../pages/form/Form';
import Queue from '../pages/queue/Queue';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <Form/>
        </div>
        <div className="content">
          <Queue/>
        </div>
      </div>
    );
  }
}

export default App;
