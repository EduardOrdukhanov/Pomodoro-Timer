import React, { Component } from 'react';
import Timer from "./Timer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Timer/>
        Created by Eduard Ordukhanov
      </div>
    );
  }
}

export default App;
